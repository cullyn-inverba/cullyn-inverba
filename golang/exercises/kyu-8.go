package main

import (
	"fmt"
	"math"
	"strings"
)

// MakeNegative returns a negative int, even
// if the int was already negative
func MakeNegativeOld(x int) int {
	if x == 0 {
		return 0
	}
	return int(math.Abs(float64(x)) * -1)
}

// Better solution
func MakeNegative(x int) int {
	if x >= 0 {
		return -x
	}
	return x
}

// GetSize returns the surface area and volume
// of a given box in an array [area, volume]
func GetSizeOld(w, h, d int) [2]int {
	var res [2]int
	area := 2 * (w*h + w*d + d*h)
	volume := w * h * d
	res[0], res[1] = area, volume
	return res
}

// More clear solution ^
func GetSize(w, h, d int) [2]int {
	area := (2 * (h * w)) + (2 * (h * d)) + (2 * (d * w))
	volume := w * h * d
	return [2]int{area, volume}
}

// IsPalindrome returns a bool value based on whether the
// given string is a palindrome.
func IsPalindromeOld(str string) bool {
	var ss []string
	str = strings.ToLower(str)
	ss = strings.Split(str, "")

	// reverse given slice
	for i, j := 0, len(ss)-1; i < j; i, j = i+1, j-1 {
		ss[i], ss[j] = ss[j], ss[i]
	}
	sr := strings.Join(ss, "")

	if sr == str {
		return true
	}
	return false
}

// Better and accounts for non-ASCI strings
func IsPalindrome(str string) bool {
	runes := []rune(strings.ToLower(str))
	length := len(runes)

	for i := 0; i < length/2; i++ {
		if runes[i] != runes[length-1-i] {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(IsPalindrome("Hannah"))
}
