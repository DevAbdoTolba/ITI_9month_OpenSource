count = gets.to_i

scores = []
count.times do |i|
  print "Enter score #{i + 1}: "
  scores << gets.chomp.to_i
end

average = scores.sum.to_f / scores.length

grade =
  if average >= 90
    "A"
  elsif average >= 80
    "B"
  elsif average >= 70
    "C"
  elsif average >= 60
    "D"
  else
    "F"
  end

puts
puts "Results:"
puts "  Average : #{average}"
puts "  Grade   : #{grade}"
puts "  Highest : #{scores.max}"
puts "  Lowest  : #{scores.min}"
