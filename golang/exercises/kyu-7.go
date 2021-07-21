package main

import (
	"math"
	"strings"
	"time"
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

// UnluckyDays returns number of Friday 13th in a Gregorian year.
func UnluckyDays(year int) (count int) {
	for m := 1; m <= 12; m++ {
		if time.Date(year, time.Month(m), 13, 0, 0, 0, 0, time.UTC).Weekday() == 5 {
			count++
		}
	}
	return count
}

func main() {

}
