class Queue


    def initialize(*queue)
        @var = queue
    end

    def enqueue(el)
        @var.unshift(el)
    end

    def dequeue
        @var[0...-1]
    end

    def peek
        @var[-1]
    end

end


que = Queue.new(1,2,3,4)
p que.dequeue
p que.enqueue(7)
p que.peek