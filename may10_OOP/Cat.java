public class Cat extends Pet {
    public Cat(String name) {
        this.name = name;
        this.type = "Cat";
    }

    // polymorphism
    // @Override: optional annotation
    @Override
    public void eat() {
        System.out.println("Cat eats fish");
    }

    public void jump() {
        System.out.printf("%s the %s loves jumping!!\n", this.name, this.type);
    }

    public void play() {
        this.jump();
        super.eat();
    }

    // Abstraction
    @Override
    public void drink(String name) {
        System.out.printf("%s the kitty drinks %s\n", this.name, name);
    }
}
