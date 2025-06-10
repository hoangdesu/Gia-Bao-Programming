#include <stdio.h>
#include <stdbool.h>

int main(void)
{
    // Arrays: only static
    int nums[10] = {1, 2, 3}; // len = 10

    for (int i = 0; i < 10; i++) {
        printf("%d. %d\n", i, nums[i]);
    }

    // printf("nums[200] = %d\n", nums[200]); -> possible, be careful

    printf("sizeof array: %lu\n", sizeof(nums)); // total size of arr in BYTES
    int arr_len = sizeof(nums) / sizeof(int);
    printf("arr length = %d\n", arr_len);

    char name[] = "Bao"; // 3
    printf("my name is %s\n", name);
    // name = "Peter"; // 5
    name[0] = 'P';
    printf("my name is %s\n", name);
    
    
    char *newName = name;
    printf("new name = %s\n", newName);

    newName[1] = 'A';
    newName[2] = 'O';
    printf("new name = %s\n", newName);

    printf("old name = %s\n", name);

    int name_length = sizeof(name) / sizeof(name[0]);
    printf("name_length = %d\n", name_length);

    // '\0': null terminating character
    for (int i = 0; name[i] != '\0'; i++) {
        printf("%d. %c\n", i, name[i]);
    }

    // Getting user inputs
    // int a, b;

    // printf("a=%d, b=%d\n", a, b);
    // printf("Enter a: ");
    // scanf("%d", &a);

    // printf("Enter b: ");
    // scanf("%d", &b);

    // printf("%d + %d = %d\n", a, b, (a + b));

    // &: "address-of" operator
    // &a: address of a

    // char username[20];

    // printf("Enter username: ");
    // scanf("%s", username);

    // // printf("Hello %s\n", username);

    // for (int i = 0; i < 20; i++) {
    //     printf("username: %d. %c\n", i, username[i]);
    // }

    // for (int i = 0; username[i] != '\0'; i++) {
    //     printf("- actual username: %d. %c\n", i, username[i]);
    // }

    // char *password;
    // printf("Enter password: ");
    // scanf("%s", password);
    // printf("Password = %s", password);


    // pointer
    int a = 1;
    printf("a = %d, memory address of a = %p\n", a, &a);

}