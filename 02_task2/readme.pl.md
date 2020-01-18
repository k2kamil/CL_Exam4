Zadanie
---

**Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**

Napiszcie funkcję bigestSumOfTwoElements(array), która przyjmuje tablicę z liczbami i zwraca sumę dwóch największych elementów z tej tablicy. 

Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby - nie trzeba robić walidacji.

Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.  
Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logiczną **false**.

**Przykład:**
```js
bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68
```