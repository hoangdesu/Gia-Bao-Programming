import java.util.ArrayList;

public class May18_Arrays {
    public static void main(String[] args) {
        ArrayList<String> food = new ArrayList<>(10); // initial capacity = 10

        for (int i = 0; i < 20; i++) {
            food.add(i+ ". Com tam");
        }

        // => String[] food = new String[10];
        // String[] food = new String[20];
        // String[] food = new String[40];
        // String[] food = new String[80];

        System.out.println(food);

    }    

}
