import java.util.ArrayList;
import java.util.Arrays;

public class Feb16_Algos {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 6, 5, 10, 8, 7, 9, 1234};

        int[] evens = removeOdds(nums);

        // System.out.println(evens); // 2, 4, 6, 10, 8
        // for (int n : evens) {
        //     System.out.print(n + " ");
        // }

        System.out.println(Arrays.toString(evens));
        System.out.println(Arrays.toString(removeOdds1(nums)));
        System.out.println(Arrays.toString(removeOdds2(nums)));

        // primitive vs wrapper types
        int a = 1;
        Integer b = 2;

        System.out.println(a + b);

        // System.out.println(b.);
    }

    // option 1: return 1 static array
    public static int[] removeOdds(int[] nums) {
        int count = 0;
        for (int num : nums) {
            if (num % 2 == 0) count++;
        }

        int[] evens = new int[count];
        int i = 0;
        for (int num : nums) {
            if (num % 2 == 0) {
                evens[i] = num;
                i++;
            }
        }

        return evens;
    }


    // option 2: use dynamic array
    public static int[] removeOdds1(int[] nums) {
        ArrayList<Integer> evens = new ArrayList<>();

        for (int n : nums) if (n % 2 == 0) evens.add(n);

        return evens.stream().mapToInt(i -> i).toArray();
    }

        // option 3: Java' Stream API
    public static int[] removeOdds2(int[] nums) {
        return Arrays.stream(nums)
                        .filter(n -> n % 2 == 0)
                        .toArray();
    }
}