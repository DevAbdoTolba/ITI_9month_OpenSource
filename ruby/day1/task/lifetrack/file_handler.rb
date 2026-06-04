require_relative "handler"

class FileHandler < Handler
  def initialize(path)
    @path = path
  end

  def handle(event)
    stamp = event.time.strftime("%Y-%m-%d %H:%M")
    File.open(@path, "a") do |file|
      file.puts "[#{stamp}] #{event.type.upcase} — #{event.description} (#{event.duration} min)"
    end
  end
end
