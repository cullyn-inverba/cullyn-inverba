package main

import "fmt"

func main() {
	// Slice is used instead of array
	x := []int{4, 5, 6, 7, 8, 9}
	fmt.Println(len(x))
	fmt.Println(cap(x))
	fmt.Println(x[0])

	for i, v := range x {
		fmt.Println(i, v)
	}

	fmt.Println("------")

	y := []int{42, 69, 324, 420}
	x = append(x, y...)
	for i, v := range x {
		fmt.Println(i, v)
	}

	fmt.Println("--------")

	x = append(x[:2], x[4:]...)
	for i, v := range x {
		fmt.Println(i, v)
	}

	fmt.Println("--------")

	x = make([]int, 10, 100)
	fmt.Println(x)
	x = append(x[:10], y...)
	fmt.Println(x, len(x), cap(x))

}
