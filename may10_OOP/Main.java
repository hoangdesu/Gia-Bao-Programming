import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Pet hamster = new Pet();
        // hamster.eat();
        // hamster.jump();

        Cat tom = new Cat("Tom");
        tom.eat();
        tom.jump();
        tom.play();
        tom.drink("milk");

        Dog spike = new Dog("Spike");
        spike.eat();
        spike.drink("just water");

        // List -> ArrayList
        // ArrayList<Pet> pets = new ArrayList<>();
        // List<Pet> pets2 = new ArrayList<>();

        Car car = new Car();
        car.drive();

        Plane plane = new Plane();
        plane.drive();
        plane.takeOff();
        plane.fly();
        plane.landing();
    }
}


