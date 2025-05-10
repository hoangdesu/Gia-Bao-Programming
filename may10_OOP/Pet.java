public abstract class Pet {
    String name;
    String type;

    public void eat() {
        System.out.printf("%s the %s is eating...\n", this.name, this.type);
    }

    // abstract method
    public abstract void drink(String name);
}
