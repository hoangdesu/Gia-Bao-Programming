class Car:
    # constructor method
    def __init__(self, name):
        self.name = name

    # toString: what to print when u simply just print out the object itself
    def __repr__(self):
        return 'calling the __repr__ function on ' + self.name

    def to_string(self):
        return f'Car name: {self.name}'
        

ferrari = Car('Ferrari')

print(ferrari.name)
print(ferrari) # ?
print(ferrari.to_string())