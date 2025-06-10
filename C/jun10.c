#include <stdio.h>

void add1(int a) {
    a = a + 1;
    printf("add1 a = %d\n", a);
    // return a;
}

void add2(int* aPtr) {
    *aPtr += 2;
}

// e.g. java
int times2(int a) {
    return a * 2;
}

int main(void)
{
    // Compare strings
    char name1[] = "BaoHuynh";
    char name2[] = "Bao";

    // printf("name1 == name2? %d\n", name1 == name2);
    // str1.equals(str2)

    int equal = 1;
    for (int i = 0; name1[i] != '\0'; i++) {
        if (name1[i] != name2[i]) {
            equal = 0;
            break;
        }
    }

    if (equal == 1) {
        printf("name1 == name2\n");
    }

    // malloc, calloc, realloc, free

    // String inputs
    // char inputName[20];
    // printf("Enter username: ");
    // // scanf("%s", inputName);
    // fgets(inputName, sizeof(inputName), stdin);

    // printf("inputName: %s\n", inputName);

    // scan upto \n , (space)

    // int a = 1;
    // while (1) {
    //     a++;
    //     printf("%d\n", a);
    // }


    // Pointer: a variable holding the memory address of another variable
    int a = 1;
    int* aPtr = &a;

    printf("a = %d, aPtr = %p, *aPtr = %d\n", a, aPtr, *aPtr);

    // add1(a); // add1(1)
    // printf("new a = %d\n", a);

    // a = add1(a);
    // &a: address of a, referencing a
    // *aPtr: de-reference pointer to a -> value

    a = 2;

    // deference pointer to get back the og value
    *aPtr = 3;

    add2(aPtr);

    // only way to change a primitive value in lets say java from within a func
    a = times2(a);

    printf("&a = %p, *&a = %d, *&*&*&a = %d\n", &a, *&a, *&*&*&a);


    return 0;
}