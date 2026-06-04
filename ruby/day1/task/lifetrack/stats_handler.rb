require_relative "handler"

class StatsHandler < Handler
  def initialize
    @count = Hash.new(0)
    @minutes = Hash.new(0)
    at_exit { report }
  end

  def handle(event)
    @count[event.type] += 1
    @minutes[event.type] += event.duration
  end

  def report
    return if @count.empty?
    puts
    puts "=== Summary ==="
    @count.each do |type, count|
      puts "#{type.upcase} — #{count} session(s), #{@minutes[type]} min total"
    end
  end
end
