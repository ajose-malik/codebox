package main

import "fmt"
 
func main() {
	cards := []string{"ace of spade", newCard()}
	cards = append(cards, "six of spades")

	for card := range cards {
		fmt.Println(card)
	}
}

func newCard()string {
return "fuckos"
}