class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    
node1 = Node('a')
node2 = Node('b')
node3 = Node('c')
node4 = Node('d')

# freely connect to any node
node1.next = node4
node4.next = node3
node3.next = node2

# node3.next = node4

# traversal through a linked list
currentNode = node1
while currentNode:
    print(currentNode.data, end=" -> ")
    currentNode = currentNode.next
print("null")
