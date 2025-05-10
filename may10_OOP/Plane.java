public class Plane implements Vehicle, FlyingObject {
    @Override
    public void drive() {
        System.out.println("🛩💨");
    }

    @Override
    public void turn(String direction) {
        
    }

    @Override
    public void takeOff() {
        System.out.println("🛫");
    }

    @Override
    public void landing() {
        System.out.println("🛬");
    }

    @Override
    public void fly() {
        System.out.println("✈️✈️✈️✈️✈️");
    }
}
