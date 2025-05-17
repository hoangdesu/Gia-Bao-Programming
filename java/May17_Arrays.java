import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class May17_Arrays {

    static class Game {
        String name;
        double rating;

        public Game(String name, double rating) {
            this.name = name;
            this.rating = rating;
        }

        public String getName() {
            return name;
        }

        @Override
        public String toString() {
            return String.format("Name: %s - Rating: %.1f\n", this.name, this.rating);
        }
    }

    public static void main(String[] args) {
        // Arrays: contiguous blocks of memory
        // 1. static array: []
        // String[] drinks = {"Ca phe sua da", "Matcha latte", "Milk tea"}; // size = 3

        String[] drinks = new String[5]; // fixed size = 5
        drinks[0] = "Milk tea";

        System.out.println("I like " + drinks[0]);
        System.out.println(drinks.length);


        System.out.println("Drinks: " + drinks); // memory address of this array

        int[] nums = {1, 2, 3};
        for (int n : nums) {
            System.out.println(n);
        }

        // Game[] games = new Game[3];
        // Game valorant = new Game("Valorant", 9.1);
        // games[0] = valorant;
        
        Game[] games = {new Game("Valorant", 9.1), new Game("League of Legends", 8.2)};
        System.out.println("I love playing " + games[0].getName());

        Game myGame = new Game("Ori", 9.9);
        System.out.println("My game: " + myGame); // call toString

        // int vs long
        
        // 2. Dynamic arrays: grow and shrink
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        System.out.println(numbers.toString());
        System.out.println(numbers.get(0)); // numbers[0]

        numbers.set(1, 90); // 20 -> 90
        System.out.println(numbers.get(1));

        ArrayList<Integer> nums2 = new ArrayList<>();
        nums2.add(100);
        nums2.add(200);
        nums2.add(300);
        nums2.add(30);

        numbers.addAll(nums2);
        System.out.println("Numbers: " + numbers);

        System.out.println(numbers.contains(100));


        System.out.println(numbers.equals(nums2));
        
        @SuppressWarnings("unchecked")
        ArrayList<Integer> clonedNumbers = (ArrayList<Integer>) numbers.clone();
        System.out.println(numbers.equals(clonedNumbers));

        // numbers.clear();
        // System.out.println(numbers.isEmpty());
    
        System.out.println("Contains number 100 & 201: " + numbers.containsAll(List.of(100, 201)));
        
    
        System.out.println("Index of 30: " + numbers.indexOf(30));
        System.out.println("Index of 92: " + numbers.indexOf(92));

        System.out.println("Last index of 30: " + numbers.lastIndexOf(30));


        numbers.forEach(num -> {
            System.out.println("- my num: " + num);
        });

        // similar to this for-each loop
        for (int num : numbers) {
            System.out.println(". num = " + num);
        }

        // Stream API: functional paradigm
        List<Integer> largeNums = numbers
                                    .stream()
                                    .filter(n -> {
                                        return n >= 100;
                                    })
                                    .collect(Collectors.toList());

        System.out.println("Large nums: " + largeNums);

        // TODO: initial size for ArrayList
    }
}
