class Stack
    def initialize(*stack)
        # create ivar to store stack here!
        @stacks = stack
    end

    def push(el)
        # adds an element to the stack
        @stacks << el
    end

    def pop
      # removes one element from the stack
      return @stacks[0..-2]
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
        @stacks[-1]
    end

end

