OOP: Object-oriented programming
Paradigm: pattern / approach

1. Encapsulation: 
   - protect data from unwanted access/modify
   - private, protected
2. Inheritance
   - child classes getting everything (attributes, methods) from 1 parent class (not constructor)
   - avoid code duplication, extending on the current foundation
   - use the super keyword to refer to the parent class
3. Polymorphism
   - many shapes
   - different usages for methods sharing the same name
4. Abstraction
   - stating a concept
   - hideaway the implemtation
   - UI: user interface
   - interface: the bridge between 2 sides
   - 2 ways to achieve abstraction in java:
        1. abstract class
           - child class can only extends from 1 abstract class
           - you can have the whole class as abstract or parts of it (methods)
           - abstract methods have NO implementation. It's on the child classes to implement them
        2. interface (implements)
           - no implementation AT ALL
           - child class can implements MULTIPLE interfaces


Class -> objects
Abstract class -> classes -> objects