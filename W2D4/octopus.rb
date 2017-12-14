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
    if left.first < right.first
      ordered_fish.push(left.shift)
    else
      return [] if right.empty?
      ordered_fish.push(right.shift)
    end
  end

  ordered_fish + left + right
end
# puts "Inital: #{fish}"
# puts "----------------"
# fish.shuffle!
# puts "Shuffle: #{fish}"
# puts "----------------"
# fish = merge_sort(fish)
# puts "Sorted: #{fish}"


def clever(fish)
  whopper = fish[0]
  (1...fish.length).each do |idx|
    whopper = fish[idx] if fish[idx].length > whopper.length
  end

  whopper
end

# puts "Clever sort: #{clever(fish)}"


tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
