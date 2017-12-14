fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# puts "#{fish.join(' ')}"

def sluggish(fish)
  whopper = fish[0]
  (0...fish.length - 1).each do |i|
    (i + 1..fish.length - 1).each do |j|
      whopper = fish[j] if fish[j].length > fish[i].length
    end
  end

  whopper
end

# puts sluggish(fish)

def merge_sort(fish)
  return fish if fish.length <= 1
  mid_idx = fish.length / 2

  left = merge_sort(fish.take(mid_idx))
  right = merge_sort(fish.drop(mid_idx))

  combine_fish(left, right)
end

def combine_fish(left, right)
  ordered_fish = []

  until left.empty? || right.empty?
    if left.first.length < right.first.length
      ordered_fish << left.shift
    else
      ordered_fish << right.shift
    end
  end

  ordered_fish + left + right
end
# puts "Inital: #{fish}"
# puts "----------------"
# fish.shuffle!
puts "Shuffle: #{fish}"
puts "----------------"
fish = merge_sort(fish)
puts "Sorted: #{fish.last}"


def clever(fish)
  whopper = fish[0]
  (1...fish.length).each do |idx|
    whopper = fish[idx] if fish[idx].length > whopper.length
  end

  whopper
end

# puts "Clever sort: #{clever(fish)}"


tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

# solves this in O(n)
def slow_dance(direction, array)
  array.each_with_index do |tile, idx|
    return idx if tile == direction
  end

  nil
end

p slow_dance("up", tiles_array) # => 0
p slow_dance("right-down", tiles_array) # => 3

tiles_hash = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}

# solves in O(1) time
def constant_dance(direction, tiles_hash)
  tiles_hash[direction]
end

p constant_dance("up", tiles_hash)
# > 0

p constant_dance("right-down", tiles_hash)
# > 3
