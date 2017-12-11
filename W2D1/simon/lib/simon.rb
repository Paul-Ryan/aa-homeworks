class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
      system 'clear'
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    unless @game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts "#{color}"
      sleep 2
      system 'clear'
    end
  end

  def require_sequence
    guess = []
    puts "what is the sequence?"
    sequence_length.times do |idx|
      guess << gets.chomp
      unless guess[idx] == @seq[idx]
        @game_over = true
        break
      end
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "Round successful. Here's the next sequence:"
  end

  def game_over_message
    puts "try harder next time and you will maybe not lose so bad"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
