package main

import "fmt"

func main() {
	// learn()
	learn2()
}

func send(e, o, q chan<- int) {
	for i := 0; i < 21; i++ {
		if i%2 == 0 {
			e <- i
		} else {
			o <- i
		}
	}
	q <- 0
}

func receive(e, o, q <-chan int) {
	for {
		select {
		case v := <-e:
			fmt.Println("Even:", v)
		case v := <-o:
			fmt.Println("\t Odd:", v)
		case v := <-q:
			fmt.Println("\t\t\tReceived from quit:", v)
			return
		}
	}
}

func learn2() {
	eve := make(chan int)
	odd := make(chan int)
	quit := make(chan int)

	go send(eve, odd, quit)
	receive(eve, odd, quit)

	fmt.Println("Exiting...")
}

// func learn() {
// 	c := make(chan int)
// 	// c <- 42
// 	// fmt.Println(<-c)
// 	// c <- 43
// 	// fmt.Println(<-c)
// 	// fmt.Printf("%T\n", c)

// 	fmt.Println("---")
// 	cr := make(<-chan int)
// 	cs := make(chan<- int)

// 	fmt.Printf("receive: %T\n", cr)
// 	fmt.Printf("send: %T\n", cs)

// 	fmt.Println("----")
// 	go sen(c)
// 	rec(c)
// 	fmt.Println("exit")
// }

// func sen(c chan<- int) {
// 	for i := 0; i < 10; i++ {
// 		c <- i
// 	}
// 	close(c)
// }

// func rec(c <-chan int) {
// 	for v := range c {
// 		fmt.Println(v)
// 	}
// }
