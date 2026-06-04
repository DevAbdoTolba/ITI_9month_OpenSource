require_relative "event"
require_relative "event_router"
require_relative "console_handler"
require_relative "file_handler"
require_relative "stats_handler"

router = EventRouter.new
router.register(ConsoleHandler.new)
router.register(FileHandler.new("lifetrack.log"))
router.register(StatsHandler.new)

TYPES = { "1" => "work", "2" => "study", "3" => "exercise", "4" => "meal" }

loop do
  puts
  puts "=== LifeTrack ==="
  puts "1. Log a work session"
  puts "2. Log a study session"
  puts "3. Log an exercise session"
  puts "4. Log a meal"
  puts "5. Exit"
  puts
  print "Choose an option: "
  choice = gets&.chomp
  break if choice.nil? || choice == "5"

  type = TYPES[choice]
  unless type
    puts "Invalid option."
    next
  end

  print "Description: "
  description = gets.chomp
  print "Duration (minutes): "
  duration = gets.chomp.to_i

  puts
  router.dispatch(Event.new(type, description, duration, Time.now))
  puts "✓ Event logged."
end
