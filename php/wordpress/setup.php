<?php
require_once __DIR__ . '/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';
require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
require_once ABSPATH . 'wp-admin/includes/plugin.php';

if (get_option('iti_setup_done')) { die('Setup already completed. Delete this file.'); }

wp_set_current_user(1);

class Silent_Skin extends WP_Upgrader_Skin {
    public function feedback($feedback, ...$args) {}
    public function header() {}
    public function footer() {}
}

echo '<!DOCTYPE html><html><head><title>Portfolio Setup</title>
<style>body{font-family:monospace;background:#111;color:#0f0;padding:40px}h1{color:#0ff}h2{color:#ff0;margin-top:30px}.ok{color:#0f0}.fail{color:#f00}</style>
</head><body>';
echo '<h1>Portfolio Setup</h1>';
ob_flush(); flush();

// ============ IMAGES ============
echo '<h2>1/7 Downloading Images...</h2>';
ob_flush(); flush();

$img_ids = [];
$seeds = ['tech', 'coding', 'webdev', 'designer', 'workspace', 'laptop'];
foreach ($seeds as $i => $seed) {
    $id = media_sideload_image("https://picsum.photos/seed/{$seed}/800/600", 0, ucfirst($seed), 'id');
    if (!is_wp_error($id)) {
        $img_ids[] = $id;
        echo '<p class="ok">  ✓ Image ' . ($i + 1) . " (ID: {$id})</p>";
    } else {
        echo '<p class="fail">  ✗ Image ' . ($i + 1) . ': ' . $id->get_error_message() . '</p>';
    }
    ob_flush(); flush();
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
        $b .= "<!-- wp:image {\"id\":{$id},\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n";
        $b .= "<figure class=\"wp-block-image size-large\"><img src=\"{$u}\" alt=\"\" class=\"wp-image-{$id}\"/></figure>\n";
        $b .= "<!-- /wp:image -->\n";
    }
    $b .= "</figure>\n<!-- /wp:gallery -->";
    return $b;
}

// ============ USERS ============
echo '<h2>2/7 Creating Users...</h2>';
ob_flush(); flush();

$user_data = [
    ['ahmed_editor',  'Pass@1234', 'ahmed@test.com',  'editor',      'Ahmed',  'Hassan'],
    ['sara_author',   'Pass@1234', 'sara@test.com',   'author',      'Sara',   'Mohamed'],
    ['omar_contrib',  'Pass@1234', 'omar@test.com',   'contributor', 'Omar',   'Ali'],
    ['mona_sub',      'Pass@1234', 'mona@test.com',   'subscriber',  'Mona',   'Ibrahim'],
];
$uids = [];
foreach ($user_data as $u) {
    $uid = wp_create_user($u[0], $u[1], $u[2]);
    if (!is_wp_error($uid)) {
        $usr = new WP_User($uid);
        $usr->set_role($u[3]);
        wp_update_user(['ID' => $uid, 'first_name' => $u[4], 'last_name' => $u[5], 'display_name' => $u[4] . ' ' . $u[5]]);
        $uids[$u[3]] = $uid;
        echo '<p class="ok">  ✓ ' . $u[0] . ' (' . $u[3] . ')</p>';
    } else {
        echo '<p class="fail">  ✗ ' . $u[0] . ': ' . $uid->get_error_message() . '</p>';
    }
}
ob_flush(); flush();

// ============ PAGES ============
echo '<h2>3/7 Creating Pages...</h2>';
ob_flush(); flush();

$g = isset($img_ids[0]) ? $img_ids : [];

$home_content = '<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Welcome to My Portfolio</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I\'m Abdo Tolba, a passionate web developer from Egypt. I specialize in building modern, responsive websites and web applications using the latest technologies. Welcome to my digital space where I showcase my work, skills, and journey in the world of web development.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Gallery</h2>
<!-- /wp:heading -->

' . gallery_block(array_slice($g, 0, 4)) . '

<!-- wp:paragraph -->
<p>Explore my portfolio to learn more about my projects, skills, and how we can work together to bring your ideas to life.</p>
<!-- /wp:paragraph -->';

$about_content = '<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">About Me</h1>
<!-- /wp:heading -->

' . img_block(isset($img_ids[0]) ? $img_ids[0] : null) . '

<!-- wp:paragraph -->
<p>My name is Abdo Tolba. I\'m an Egyptian web developer currently studying at the Information Technology Institute (ITI). I have a strong passion for building clean, efficient, and user-friendly web applications that solve real-world problems.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Education</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I\'m currently enrolled in the 9-month professional training program at ITI, focusing on Open Source technologies. My coursework covers a wide range of topics including HTML, CSS, JavaScript, PHP, Node.js, databases, and frameworks like Vue.js and Angular.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Background</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>With a background in computer science and a keen eye for design, I bridge the gap between functionality and aesthetics. I believe that great software should not only work flawlessly but also provide an exceptional user experience. My goal is to become a full-stack developer capable of building complete web solutions from concept to deployment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Interests</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I\'m always looking for new challenges and opportunities to grow as a developer.</p>
<!-- /wp:paragraph -->';

$skills_content = '<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">My Skills</h1>
<!-- /wp:heading -->

' . img_block(isset($img_ids[1]) ? $img_ids[1] : null) . '

<!-- wp:paragraph -->
<p>Throughout my journey as a developer, I have acquired a diverse set of skills spanning frontend and backend development, as well as various tools and technologies.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Frontend Development</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
<li>HTML5 and Semantic Markup</li>
<li>CSS3, Flexbox and CSS Grid</li>
<li>JavaScript (ES6+)</li>
<li>Vue.js and Angular</li>
<li>Bootstrap and Responsive Design</li>
</ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Backend Development</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
<li>PHP and WordPress Development</li>
<li>Node.js and Express.js</li>
<li>MySQL and MongoDB</li>
<li>RESTful API Design</li>
<li>NestJS Framework</li>
</ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Tools and Technologies</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
<li>Git and GitHub</li>
<li>VS Code</li>
<li>Linux and Command Line</li>
<li>Data Structures and Algorithms</li>
<li>XAMPP and LAMP Stack</li>
</ul>
<!-- /wp:list -->';

$projects_content = '<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">My Projects</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Here are some of the projects I have worked on. Each project represents a unique challenge and an opportunity to apply my skills in real-world scenarios.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">E-Commerce Platform</h2>
<!-- /wp:heading -->

' . img_block(isset($img_ids[2]) ? $img_ids[2] : null) . '

<!-- wp:paragraph -->
<p>A full-stack e-commerce platform built with PHP and MySQL. Features include product catalog management, shopping cart with session handling, user authentication and registration, order tracking, and an admin dashboard. The frontend uses Bootstrap for a responsive, mobile-first design that works across all devices.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Task Management App</h2>
<!-- /wp:heading -->

' . img_block(isset($img_ids[3]) ? $img_ids[3] : null) . '

<!-- wp:paragraph -->
<p>A real-time task management application built with Vue.js and Node.js. Users can create, assign, and track tasks with drag-and-drop functionality. Features include team collaboration workspaces, deadline reminders with notifications, progress analytics dashboard, and role-based access control for team members.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Weather Dashboard</h2>
<!-- /wp:heading -->

' . img_block(isset($img_ids[4]) ? $img_ids[4] : null) . '

<!-- wp:paragraph -->
<p>An interactive weather dashboard that displays real-time weather data from multiple cities worldwide. Built with vanilla JavaScript and integrated with the OpenWeatherMap API. Features include city search with autocomplete, 5-day weather forecasts, dynamic weather animations, and the ability to save favorite locations for quick access.</p>
<!-- /wp:paragraph -->';

$contact_content = '<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Contact Me</h1>
<!-- /wp:heading -->

' . img_block(isset($img_ids[5]) ? $img_ids[5] : null) . '

<!-- wp:paragraph -->
<p>I would love to hear from you! Whether you have a project idea, a question about my work, or just want to say hello, feel free to reach out using the form below or through my contact information.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Contact Information</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
<li><strong>Email:</strong> abdo.tolba@example.com</li>
<li><strong>Phone:</strong> +20 100 000 0000</li>
<li><strong>Location:</strong> Cairo, Egypt</li>
<li><strong>GitHub:</strong> github.com/DevAbdoTolba</li>
</ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Send a Message</h2>
<!-- /wp:heading -->

CONTACT_FORM_PLACEHOLDER';

$pages = [
    ['Home',       'home',       $home_content],
    ['About',      'about',      $about_content],
    ['Skills',     'skills',     $skills_content],
    ['Projects',   'projects',   $projects_content],
    ['Contact Me', 'contact-me', $contact_content],
];

$page_ids = [];
foreach ($pages as $p) {
    $existing = get_page_by_path($p[1]);
    if ($existing) {
        $page_ids[$p[1]] = $existing->ID;
        echo '<p class="ok">  ✓ ' . $p[0] . ' (already exists)</p>';
        continue;
    }
    $id = wp_insert_post([
        'post_title'   => $p[0],
        'post_name'    => $p[1],
        'post_content' => $p[2],
        'post_status'  => 'publish',
        'post_type'    => 'page',
        'post_author'  => 1,
    ]);
    if ($id && !is_wp_error($id)) {
        $page_ids[$p[1]] = $id;
        if (isset($img_ids[0])) set_post_thumbnail($id, $img_ids[array_rand($img_ids)]);
        echo '<p class="ok">  ✓ ' . $p[0] . " (ID: {$id})</p>";
    } else {
        echo '<p class="fail">  ✗ ' . $p[0] . '</p>';
    }
}
ob_flush(); flush();

// ============ POSTS ============
echo '<h2>4/7 Creating Posts...</h2>';
ob_flush(); flush();

$html_content = '<!-- wp:paragraph -->
<p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages using a system of tags and attributes that tell the browser how to render text, images, links, and other elements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>HTML was first created by Tim Berners-Lee in 1991 as a simple way to share scientific documents. Since then, it has evolved through multiple versions, with HTML5 being the current standard. HTML5 introduced powerful new semantic elements like header, nav, article, section, and footer that provide meaningful structure to web documents, improving both accessibility and SEO.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Every web page on the internet is built with HTML at its core. It works alongside CSS for styling and JavaScript for interactivity, forming the three fundamental pillars of the World Wide Web. Understanding HTML is the essential first step for anyone entering the field of web development.</p>
<!-- /wp:paragraph -->';

$css_content = '<!-- wp:paragraph -->
<p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS handles everything visual on a web page: layout, colors, fonts, spacing, animations, and responsive design that adapts to different screen sizes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The concept of cascading means that styles can be inherited and overridden in a predictable way, allowing developers to write efficient and maintainable stylesheets. CSS separates content from presentation, making it possible to completely change the look of a website without modifying any HTML code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Modern CSS3 introduced revolutionary layout systems like Flexbox and CSS Grid, making complex layouts achievable with pure CSS. Features like custom properties (CSS variables), animations, transitions, gradients, and media queries have transformed CSS into a powerful design tool that reduces the need for JavaScript in many visual effects.</p>
<!-- /wp:paragraph -->';

$js_content = '<!-- wp:paragraph -->
<p>JavaScript is a high-level, interpreted programming language that enables interactive and dynamic content on web pages. Originally created by Brendan Eich in just 10 days in 1995, JavaScript has grown to become one of the most widely used programming languages in the world, running on virtually every device with a web browser.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>JavaScript allows developers to manipulate the DOM (Document Object Model), handle user events like clicks and form submissions, make asynchronous HTTP requests (AJAX/Fetch), validate form data, create animations, and build complex single-page applications. With ES6 and later versions, the language gained modern features like arrow functions, async/await, template literals, destructuring, modules, and classes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Beyond the browser, JavaScript now powers server-side applications through Node.js, mobile apps through React Native, and desktop applications through Electron. Its massive ecosystem of libraries and frameworks (React, Vue.js, Angular, Express, NestJS) along with the npm package manager make it an incredibly versatile and essential skill for any modern developer.</p>
<!-- /wp:paragraph -->';

$posts = [
    ['HTML - HyperText Markup Language',  $html_content,  isset($uids['editor']) ? $uids['editor'] : 1],
    ['CSS - Cascading Style Sheets',      $css_content,   isset($uids['author']) ? $uids['author'] : 1],
    ['JavaScript - The Language of the Web', $js_content,  isset($uids['contributor']) ? $uids['contributor'] : 1],
];

foreach ($posts as $i => $p) {
    $post_id = wp_insert_post([
        'post_title'   => $p[0],
        'post_content' => $p[1],
        'post_status'  => 'publish',
        'post_type'    => 'post',
        'post_author'  => $p[2],
    ]);
    if ($post_id && !is_wp_error($post_id)) {
        if (isset($img_ids[$i])) set_post_thumbnail($post_id, $img_ids[$i]);
        echo '<p class="ok">  ✓ ' . $p[0] . " (author ID: {$p[2]})</p>";
    } else {
        echo '<p class="fail">  ✗ ' . $p[0] . '</p>';
    }
}
ob_flush(); flush();

// ============ MENU ============
echo '<h2>5/7 Creating Navigation Menu...</h2>';
ob_flush(); flush();

$menu_name = 'Main Menu';
$menu_exists = wp_get_nav_menu_object($menu_name);
if ($menu_exists) {
    $menu_id = $menu_exists->term_id;
    echo '<p class="ok">  ✓ Menu already exists</p>';
} else {
    $menu_id = wp_create_nav_menu($menu_name);
    echo '<p class="ok">  ✓ Menu created</p>';
}

$menu_order = ['home', 'about', 'skills', 'projects', 'contact-me'];
$menu_labels = ['Home', 'About', 'Skills', 'Projects', 'Contact Me'];

foreach ($menu_order as $i => $slug) {
    if (isset($page_ids[$slug])) {
        wp_update_nav_menu_item($menu_id, 0, [
            'menu-item-title'     => $menu_labels[$i],
            'menu-item-object'    => 'page',
            'menu-item-object-id' => $page_ids[$slug],
            'menu-item-type'      => 'post_type',
            'menu-item-status'    => 'publish',
            'menu-item-position'  => $i + 1,
        ]);
        echo '<p class="ok">  ✓ Added: ' . $menu_labels[$i] . '</p>';
    }
}

$locations = get_theme_mod('nav_menu_locations');
if (!is_array($locations)) $locations = [];
$registered = get_registered_nav_menus();
foreach (array_keys($registered) as $loc) {
    $locations[$loc] = $menu_id;
}
set_theme_mod('nav_menu_locations', $locations);

$nav_content = '';
foreach ($menu_order as $i => $slug) {
    if (isset($page_ids[$slug])) {
        $url = get_permalink($page_ids[$slug]);
        $nav_content .= '<!-- wp:navigation-link {"label":"' . $menu_labels[$i] . '","type":"page","id":' . $page_ids[$slug] . ',"url":"' . $url . '","kind":"post-type"} /-->' . "\n";
    }
}
wp_insert_post([
    'post_title'   => 'Main Navigation',
    'post_content' => $nav_content,
    'post_type'    => 'wp_navigation',
    'post_status'  => 'publish',
]);
echo '<p class="ok">  ✓ Navigation block created</p>';
ob_flush(); flush();

// ============ FRONT PAGE ============
echo '<h2>6/7 Setting Front Page...</h2>';
ob_flush(); flush();

if (isset($page_ids['home'])) {
    update_option('show_on_front', 'page');
    update_option('page_on_front', $page_ids['home']);
    echo '<p class="ok">  ✓ Home set as front page</p>';
}
ob_flush(); flush();

// ============ CONTACT FORM 7 ============
echo '<h2>7/7 Installing Contact Form 7...</h2>';
ob_flush(); flush();

$cf7_installed = false;

if (!file_exists(WP_PLUGIN_DIR . '/contact-form-7/wp-contact-form-7.php')) {
    $api = plugins_api('plugin_information', ['slug' => 'contact-form-7', 'fields' => ['sections' => false]]);
    if (!is_wp_error($api)) {
        $upgrader = new Plugin_Upgrader(new Silent_Skin());
        $result = $upgrader->install($api->download_link);
        if ($result) {
            echo '<p class="ok">  ✓ Contact Form 7 downloaded</p>';
        } else {
            echo '<p class="fail">  ✗ Download failed. Install manually from Plugins > Add New > search "Contact Form 7"</p>';
        }
    } else {
        echo '<p class="fail">  ✗ Could not reach plugin repository. Install manually.</p>';
    }
} else {
    echo '<p class="ok">  ✓ Contact Form 7 already installed</p>';
}

if (file_exists(WP_PLUGIN_DIR . '/contact-form-7/wp-contact-form-7.php')) {
    activate_plugin('contact-form-7/wp-contact-form-7.php');
    echo '<p class="ok">  ✓ Contact Form 7 activated</p>';
    $cf7_installed = true;
}
ob_flush(); flush();

if ($cf7_installed) {
    $forms = get_posts(['post_type' => 'wpcf7_contact_form', 'numberposts' => 1]);
    if (!empty($forms)) {
        $form_id = $forms[0]->ID;
        $shortcode = '[contact-form-7 id="' . $form_id . '" title="' . $forms[0]->post_title . '"]';
        $cf7_block = "<!-- wp:shortcode -->\n{$shortcode}\n<!-- /wp:shortcode -->";

        if (isset($page_ids['contact-me'])) {
            $contact_page = get_post($page_ids['contact-me']);
            $updated_content = str_replace('CONTACT_FORM_PLACEHOLDER', $cf7_block, $contact_page->post_content);
            wp_update_post(['ID' => $page_ids['contact-me'], 'post_content' => $updated_content]);
            echo '<p class="ok">  ✓ Contact form added to Contact Me page</p>';
        }
    }
} else {
    if (isset($page_ids['contact-me'])) {
        $contact_page = get_post($page_ids['contact-me']);
        $fallback = "<!-- wp:paragraph -->\n<p><em>Install Contact Form 7 plugin and add the form shortcode here.</em></p>\n<!-- /wp:paragraph -->";
        $updated_content = str_replace('CONTACT_FORM_PLACEHOLDER', $fallback, $contact_page->post_content);
        wp_update_post(['ID' => $page_ids['contact-me'], 'post_content' => $updated_content]);
    }
}

update_option('iti_setup_done', true);

echo '<h1 style="color:#0ff;margin-top:40px">Setup Complete!</h1>';
echo '<h2 style="color:#fff">User Credentials (all passwords: Pass@1234)</h2>';
echo '<table style="color:#0f0;border-collapse:collapse">';
echo '<tr><th style="padding:5px 15px;text-align:left">Username</th><th style="padding:5px 15px;text-align:left">Role</th></tr>';
foreach ($user_data as $u) {
    echo '<tr><td style="padding:5px 15px">' . $u[0] . '</td><td style="padding:5px 15px">' . $u[3] . '</td></tr>';
}
echo '</table>';
echo '<p style="color:#ff0;margin-top:20px">Now delete this file (setup.php) for security!</p>';
echo '<p><a href="' . admin_url() . '" style="color:#0ff">Go to WordPress Admin →</a></p>';
echo '</body></html>';
