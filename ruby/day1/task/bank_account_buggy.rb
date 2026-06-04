# =============================================================================
# Phase 2 — The AI Audit: Bank Account
#
# This script was "written by AI." It had exactly 5 mistakes:
#   - 2 syntax errors  (Ruby won't even run until these are fixed)
#   - 3 logic flaws    (Ruby runs but produces wrong results)
#
# Each bug is marked above the line in this format:
#   # BUG [n]: [what is wrong] -> FIX: [what it should be]
# =============================================================================

class BankAccount
  attr_reader :balance, :owner

  def initialize(owner, initial_balance)
    @owner   = owner
    @balance = initial_balance
    @rate    = 0.05
  end

  def deposit(amount)
    if amount > 0
      # 1 use +=
      @balance += amount
      puts "  New balance: $#{"%.2f" % @balance}"
    else
      puts "  Error: Deposit amount must be positive."
    end
  end

  def withdraw(amount)
    # 2 check there are enough funds first
    if amount > @balance
      puts "  Error: Insufficient funds. Balance: $#{"%.2f" % @balance}"
    else
      @balance -= amount
      puts "  New balance: $#{"%.2f" % @balance}"
    end
  end
  # 3 missing  `end`

  def apply_interest
    # 4 add the interest on top of the balance
    @balance += @balance * @rate
    puts "  New balance: $#{"%.2f" % @balance}"
  end

  def display_info
    puts "Owner  : #{@owner}"
    # 5 format to 2 decimals
    puts "Balance: $#{"%.2f" % @balance}"
  end
end

# --- Script entry point ---

account = BankAccount.new("Alice", 1000)

puts "=== Account Info ==="
account.display_info
puts

puts "Depositing $500..."
account.deposit(500)
puts

puts "Withdrawing $200..."
account.withdraw(200)
puts

puts "Applying 5% interest..."
account.apply_interest
puts

puts "Attempting to overdraw $2000..."
account.withdraw(2000)
puts
account.display_info
