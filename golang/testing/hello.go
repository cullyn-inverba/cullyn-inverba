package main

import "fmt"

func main() {
	fmt.Println("Hello world")
	foo2()
	delcaritive()
	typecheck()
}

func foo() {
	fmt.Println("I'm in foo")
}

func foo2() {
	fmt.Println("Testing snippet")
}

func delcaritive() {
	// Delcare a variable and assign a value :=
	x := 42
	fmt.Println(x)
	// Assing a new value
	x = 69
	fmt.Println(x)
	fmt.Println(y)
}

// Use var to declare new variable outside function
var y = "I'm outside the function!"
var z int

// Minimize use of var, try to limit scope, use :=

func typecheck() {
	fmt.Printf("%T\n", y)
	z = 324
	fmt.Printf("%T\n", z)
}
