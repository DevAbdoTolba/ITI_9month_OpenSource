Editorship.delete_all
Post.delete_all
User.delete_all

alice = User.create!(name: "Alice", email: "alice@example.com")
bob   = User.create!(name: "Bob", email: "bob@example.com")
carol = User.create!(name: "Carol", email: "carol@example.com")

p1 = Post.create!(title: "Rails associations", content: "learning 1:m and m:m", creator: alice)
p2 = Post.create!(title: "Join tables", content: "doing it by hand", creator: bob)

p1.editors << bob
p1.editors << carol
p2.editors << alice

puts "users: #{User.count}, posts: #{Post.count}, editorships: #{Editorship.count}"
