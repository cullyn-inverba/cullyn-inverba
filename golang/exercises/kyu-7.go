package main

import (
	"fmt"
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

func main() {
	fmt.Println(Capitalize("codewars"))
}
