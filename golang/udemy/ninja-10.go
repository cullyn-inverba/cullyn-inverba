package main

import "fmt"

func main() {
	learn()
}

func learn() {
	c := make(chan int)
	// c <- 42
	// fmt.Println(<-c)
	// c <- 43
	// fmt.Println(<-c)
	// fmt.Printf("%T\n", c)

	fmt.Println("---")
	cr := make(<-chan int)
	cs := make(chan<- int)

	fmt.Printf("receive: %T\n", cr)
	fmt.Printf("send: %T\n", cs)

	fmt.Println("----")
	go sen(c)

	rec(c)
	fmt.Println("exit")
}

func sen(c chan<- int) {
	c <- 42
}

func rec(c <-chan int) {
	fmt.Println(<-c)
}
