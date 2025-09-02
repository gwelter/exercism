// Package weather forecasts the weather.
package weather

// CurrentCondition for the current wheather condition.
var CurrentCondition string
// CurrentLocation for the current location.
var CurrentLocation string

// Forecast return a string.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
