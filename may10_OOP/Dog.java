public class Dog extends Pet {
    public Dog(String name) {
        this.name = name;
        this.type = "Doggo";
    }

    @Override
    public void drink(String name) {
        System.out.printf("%s the doggo loves drinking %s\n", this.name, name);
    }
}
