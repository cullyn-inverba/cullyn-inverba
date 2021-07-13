package main

import "fmt"

func main() {
	learn()
}

type person struct {
	first string
	last  string
	age   int
}

func learn() {
	p1 := person{
		first: "James",
		last:  "Bonds",
		age:   32,
	}
	p2 := person{
		first: "Miss",
		last:  "Moneypenny",
		age:   26,
	}

	fmt.Println(p1)
	fmt.Println(p2)
	fmt.Println(p1.first, p1.last)
	fmt.Println(p1.age)

	secretAgent := struct {
		person
		ltk bool
	}{
		person: p1,
		ltk:    true,
	}

	fmt.Println(secretAgent.ltk)
}
