<?php
add_action('init', function () {

if (get_option('iti_setup_done')) return;

require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';
require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
require_once ABSPATH . 'wp-admin/includes/plugin.php';

class Silent_Skin extends WP_Upgrader_Skin {
    public function feedback($feedback, ...$args) {}
    public function header() {}
    public function footer() {}
}

wp_set_current_user(1);

$img_ids = [];
for ($i = 1; $i <= 6; $i++) {
    $id = media_sideload_image("https://picsum.photos/seed/iti{$i}/800/600", 0, "img{$i}", 'id');
    if (!is_wp_error($id)) $img_ids[] = $id;
}

function iurl($id) { return wp_get_attachment_url($id); }
function img_block($id) {
    if (!$id) return '';
    $u = iurl($id);
    return "<!-- wp:image {\"id\":{$id},\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"{$u}\" alt=\"\" class=\"wp-image-{$id}\"/></figure>\n<!-- /wp:image -->\n";
}
function gallery_block($ids) {
    if (empty($ids)) return '';
    $b = "<!-- wp:gallery {\"linkTo\":\"none\",\"columns\":2} -->\n<figure class=\"wp-block-gallery has-nested-images columns-2 is-cropped\">\n";
    foreach ($ids as $id) {
        $u = iurl($id);
        $b .= "<!-- wp:image {\"id\":{$id},\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"{$u}\" alt=\"\" class=\"wp-image-{$id}\"/></figure>\n<!-- /wp:image -->\n";
    }
    $b .= "</figure>\n<!-- /wp:gallery -->";
    return $b;
}

$lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.';

$users = [
    ['ahmed_editor',  'Pass@1234', 'ahmed@test.com',  'editor',      'Ahmed',  'Hassan'],
    ['sara_author',   'Pass@1234', 'sara@test.com',   'author',      'Sara',   'Mohamed'],
    ['omar_contrib',  'Pass@1234', 'omar@test.com',   'contributor', 'Omar',   'Ali'],
    ['mona_sub',      'Pass@1234', 'mona@test.com',   'subscriber',  'Mona',   'Ibrahim'],
];
$uids = [];
foreach ($users as $u) {
    $uid = wp_create_user($u[0], $u[1], $u[2]);
    if (!is_wp_error($uid)) {
        (new WP_User($uid))->set_role($u[3]);
        wp_update_user(['ID' => $uid, 'first_name' => $u[4], 'last_name' => $u[5], 'display_name' => "{$u[4]} {$u[5]}"]);
        $uids[$u[3]] = $uid;
    }
}

$p = function($text) { return "<!-- wp:paragraph -->\n<p>{$text}</p>\n<!-- /wp:paragraph -->\n"; };
$h = function($text, $lvl = 2) { return "<!-- wp:heading {\"level\":{$lvl}} -->\n<h{$lvl} class=\"wp-block-heading\">{$text}</h{$lvl}>\n<!-- /wp:heading -->\n"; };

$pages_data = [
    ['Home', 'home',
        $h('Welcome', 1) . $p($lorem) . gallery_block(array_slice($img_ids, 0, 4))],
    ['About', 'about',
        $h('About Me', 1) . img_block(isset($img_ids[0]) ? $img_ids[0] : null) . $p($lorem) . $p($lorem)],
    ['Skills', 'skills',
        $h('Skills', 1) . img_block(isset($img_ids[1]) ? $img_ids[1] : null) . $p($lorem)],
    ['Projects', 'projects',
        $h('Projects', 1) . img_block(isset($img_ids[2]) ? $img_ids[2] : null) . $p($lorem) . img_block(isset($img_ids[3]) ? $img_ids[3] : null) . $p($lorem)],
    ['Contact Me', 'contact-me',
        $h('Contact Me', 1) . img_block(isset($img_ids[4]) ? $img_ids[4] : null) . $p($lorem) . "\nCONTACT_FORM_PLACEHOLDER"],
];

$page_ids = [];
foreach ($pages_data as $pg) {
    $existing = get_page_by_path($pg[1]);
    if ($existing) { $page_ids[$pg[1]] = $existing->ID; continue; }
    $id = wp_insert_post(['post_title' => $pg[0], 'post_name' => $pg[1], 'post_content' => $pg[2], 'post_status' => 'publish', 'post_type' => 'page', 'post_author' => 1]);
    if ($id && !is_wp_error($id)) {
        $page_ids[$pg[1]] = $id;
        if (!empty($img_ids)) set_post_thumbnail($id, $img_ids[array_rand($img_ids)]);
    }
}

$posts = [
    ['HTML',       $p($lorem), isset($uids['editor']) ? $uids['editor'] : 1],
    ['CSS',        $p($lorem), isset($uids['author']) ? $uids['author'] : 1],
    ['JavaScript', $p($lorem), isset($uids['contributor']) ? $uids['contributor'] : 1],
];
foreach ($posts as $i => $pt) {
    $pid = wp_insert_post(['post_title' => $pt[0], 'post_content' => $pt[1], 'post_status' => 'publish', 'post_type' => 'post', 'post_author' => $pt[2]]);
    if ($pid && !is_wp_error($pid) && isset($img_ids[$i])) set_post_thumbnail($pid, $img_ids[$i]);
}

$menu_id = wp_create_nav_menu('Main Menu');
if (!is_wp_error($menu_id)) {
    $slugs = ['home', 'about', 'skills', 'projects', 'contact-me'];
    $labels = ['Home', 'About', 'Skills', 'Projects', 'Contact Me'];
    foreach ($slugs as $i => $s) {
        if (isset($page_ids[$s]))
            wp_update_nav_menu_item($menu_id, 0, ['menu-item-title' => $labels[$i], 'menu-item-object' => 'page', 'menu-item-object-id' => $page_ids[$s], 'menu-item-type' => 'post_type', 'menu-item-status' => 'publish', 'menu-item-position' => $i + 1]);
    }
    $locs = get_theme_mod('nav_menu_locations');
    if (!is_array($locs)) $locs = [];
    foreach (array_keys(get_registered_nav_menus()) as $l) $locs[$l] = $menu_id;
    set_theme_mod('nav_menu_locations', $locs);
}

$nav = '';
$slugs = ['home', 'about', 'skills', 'projects', 'contact-me'];
$labels = ['Home', 'About', 'Skills', 'Projects', 'Contact Me'];
foreach ($slugs as $i => $s) {
    if (isset($page_ids[$s]))
        $nav .= '<!-- wp:navigation-link {"label":"' . $labels[$i] . '","type":"page","id":' . $page_ids[$s] . ',"url":"' . get_permalink($page_ids[$s]) . '","kind":"post-type"} /-->' . "\n";
}
wp_insert_post(['post_title' => 'Main Navigation', 'post_content' => $nav, 'post_type' => 'wp_navigation', 'post_status' => 'publish']);

if (isset($page_ids['home'])) {
    update_option('show_on_front', 'page');
    update_option('page_on_front', $page_ids['home']);
}

if (!file_exists(WP_PLUGIN_DIR . '/contact-form-7/wp-contact-form-7.php')) {
    $api = plugins_api('plugin_information', ['slug' => 'contact-form-7', 'fields' => ['sections' => false]]);
    if (!is_wp_error($api)) (new Plugin_Upgrader(new Silent_Skin()))->install($api->download_link);
}
if (file_exists(WP_PLUGIN_DIR . '/contact-form-7/wp-contact-form-7.php')) {
    activate_plugin('contact-form-7/wp-contact-form-7.php');
    $forms = get_posts(['post_type' => 'wpcf7_contact_form', 'numberposts' => 1]);
    if (!empty($forms) && isset($page_ids['contact-me'])) {
        $sc = '[contact-form-7 id="' . $forms[0]->ID . '" title="' . $forms[0]->post_title . '"]';
        $pg = get_post($page_ids['contact-me']);
        wp_update_post(['ID' => $page_ids['contact-me'], 'post_content' => str_replace('CONTACT_FORM_PLACEHOLDER', "<!-- wp:shortcode -->\n{$sc}\n<!-- /wp:shortcode -->", $pg->post_content)]);
    }
}

update_option('iti_setup_done', true);

});
