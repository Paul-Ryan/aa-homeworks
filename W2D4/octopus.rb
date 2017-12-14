fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']


def sluggish(fish)
  whopper = fish[0]
  (0...fish.length - 1).each do |i|
    (i + 1..fish.length - 1).each do |j|
      whopper = fish[j] if fish[j].length > fish[i].length
    end
  end

  whopper
end

puts sluggish(fish)
