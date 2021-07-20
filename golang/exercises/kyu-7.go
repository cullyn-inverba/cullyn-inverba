package main

import (
	"fmt"
	"math"
	"strings"
	"unicode"
)

// DNAStrand takes a dna string of letters 'ATCG' and
// returns the complementary string.
func DNAStrand(dna string) string {
	var dnaReplacer *strings.Replacer = strings.NewReplacer(
		"A", "T",
		"T", "A",
		"C", "G",
		"G", "C",
	)
	return dnaReplacer.Replace(dna)
}

// Capitalize returns an array [even, odd] of strings with
// even and odd letter indices capitalized, respectively
func CapitalizeOld(str string) []string {
	ss := strings.Split(str, "")

	var even []string
	var odd []string

	func(ss []string) {
		for i := 0; i < len(ss); i++ {
			if i%2 == 0 {
				even = append(even, strings.ToUpper(ss[i]))
				odd = append(odd, ss[i])
			} else {
				even = append(even, ss[i])
				odd = append(odd, strings.ToUpper(ss[i]))
			}
		}
	}(ss)

	return []string{strings.Join(even, ""), strings.Join(odd, "")}
}

// Better version of the above function ^
func Capitalize(s string) []string {
	a, b := []rune(s), []rune(s)
	for i := range a {
		if i%2 == 0 {
			a[i] = unicode.ToUpper(a[i])
		} else {
			b[i] = unicode.ToUpper(b[i])
		}
	}
	return []string{string(a), string(b)}
}

// Gps returns the *floor* of the maximum average speed over
// a given duration s out of a range of given time intervals.
func Gps(s int, x []float64) int {
	// checks for empty lists (no movement)
	if len(x) <= 1 {
		return 0
	}

	// slice of average speeds of each interaval
	var speed []float64
	for i := 0; i < len(x)-1; i++ {
		speed = append(speed, (3600*(x[i+1]-x[i]))/float64(s))
	}

	// finds max average speed
	var max float64 = speed[0]
	for _, v := range speed {
		if max < v {
			max = v
		}
	}

	return int(math.Floor(max))
}

func main() {
	s := 20
	x := []float64{0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61}
	fmt.Println(Gps(s, x))
	x = []float64{0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25}
	s = 12
	fmt.Println(Gps(s, x))
	x = []float64{}
	s = 12
	fmt.Println(Gps(s, x))
}
