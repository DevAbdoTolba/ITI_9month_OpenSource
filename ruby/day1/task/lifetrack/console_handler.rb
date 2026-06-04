require_relative "handler"

class ConsoleHandler < Handler
  def handle(event)
    stamp = event.time.strftime("%Y-%m-%d %H:%M")
    puts "[#{stamp}] #{event.type.upcase} — #{event.description} (#{event.duration} min)"
  end
end
