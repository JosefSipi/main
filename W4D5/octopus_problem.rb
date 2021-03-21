class Array

    def sluggish_octopus
        longest_fish = ""
        self.each do |ele|
            self.each do |ele2|
            longest_fish = ele if ele.length >= ele2.length
            end
        end
        longest_fish
    end

    def dominant_octopus(arr, &prc)
        array = arr.map { |ele| ele.length }
        return array if array.length <= 1

    mid_idx = array.length / 2
    sorted_arr = merge(
      merge_sort(array.take(mid_idx), &prc),
      merge_sort(array.drop(mid_idx), &prc),
      &prc)

        
        arr.each do |fish|
           return fish if fish.lenght == sorted_arr[-1]
        end
        
    end

end


all_fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

p all_fish.sluggish_octopus