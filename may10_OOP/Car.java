public class Car implements Vehicle {
    String name;

    public Car() {
        this.name = "Car";
    }

    @Override
    public void drive() {
        System.out.println("🚗💨");
    }

    @Override
    public void turn(String direction) {
        System.out.println(this.name + " turning "+ direction);
    }
}
