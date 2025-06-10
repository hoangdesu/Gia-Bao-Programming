#include <stdio.h>
#include <stdbool.h>

int main(void)
{
    char name[] = "Bao";
    printf("Hello %s :D\n", name);

    // while (1) {}

    // if error {
    //     return 1;
    //     return 2;
    // }

    int myInt;
    float myFloat;
    double myDouble;
    char myChar;

    printf("int: %zu\n", sizeof(myInt));
    printf("float: %zu\n", sizeof(myFloat));
    printf("double: %zu\n", sizeof(myDouble));
    printf("char: %zu\n", sizeof(myChar));

    int a = 5;
    int b = 2;
    float c = (float) a / (float) b;

    printf("c = %.1f\n", c);


    const int d = 1;
    // d = 2;

    // Bitwise operators
    // 1 OR 0 = 1
    // 1 AND 0 = 0

    printf("1 & 0 = %d\n", 1 & 0);
    // > > = right shift 1 => / 2
    // < < = left shift 1 => * 2

    // 1011: 11
    // 10110: 2+4+16 = 22


    printf("a = %d, a << 1 = %d, a >> 1 = %d\n", a, a << 1, a >> 1);

    bool is_fun = true;
    if (is_fun == 1) {
        printf("is fun = %d\n", is_fun);
    }
    

    printf("a > 1 = %d\n", a > 1);

    // ternary operator
    bool is_a_even = a % 2 == 0 ? true : false;
    printf("a even num? %d\n", is_a_even);


    do {
        printf("a is > 5\n");
    } while (a > 5);
    

    int nums[] = {1, 2, 3, 4, 5};
    int ttl = 0;
    int num_len = sizeof(nums) / sizeof(int);
    // C is very simple -> no ".length" attribute associated with arrays

    for (int i = 0; i < num_len; i++) {
        ttl += nums[i];
    }

    printf("Total = %d\n", ttl);

    // Garbage values
    int nums2[10];

    printf("nums2 array: \n");
    int nums2_len = sizeof(nums2) / sizeof(int);

    // for (int i = 0; i < nums2_len; i++) {
    //     nums2[i] = 0;
    // }

    for (int i = 0; i < nums2_len; i++) {
        printf("%d. %d\n", i, nums2[i]);
    }

    printf("nums2[200] = %d\n", nums2[200]); => segmentation fault


    return 0;
}

// Text -> Compiled -> Binary (.exe: executable)