Zadanie
---

**Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**

- Do każdego podpunktu stwórzcie odpowiednią funkcję o nazwie podanej w treści zadania.
- Każda funkcja niech zwraca tablicę wypełnioną odpowiednimi elementami. ( Pamiętacie, że zwracanie, a wyświetlanie to różnica? )

Wykonaj następujące polecenia:

1 - Szukanie nazw tagów:
- znajdźcie wszystkie elementy o klasie sample_class i zapiszcie je w zmiennej **task1EL**,
- stwórzcie funkcję getTag(elements) do której przekażecie jako argument znalezione elementy,
- stwórzcie w funkcji tablicę i wypełnijcie ją nazwami tagów. Pobierzcie je z elementów przekazanych jako argument.
- zwróćcie tablicę.

2 - Szukanie nazw klas:
- znajdźcie element o id sample_id i zapiszcie go w zmiennej **task2EL**
- stwórzcie funkcję getClass(element) do której przekażecie jako argument znaleziony element.
- stwórzcie w funkcji tablicę i wypełnij ją nazwami klas. Pobierz klasy z przekazanego jako argument elementu.
- zwróćcie tablicę.

3 - Szukanie tekstu:
- znajdźcie wszystkie elementy listy znajdujące się w elemencie o klasie sample_class_2 i zapiszcie je w zmiennej **task3EL**
- stwórzcie funkcję getInnerText(elements), do której przekażecie jako argument znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnij ją tekstami pobranymi z elementów przekazanych jako argument.
- zwróćcie tablicę.

4 - Szukanie adresów linków:
- znajdźcie wszystkie linki i zapiszcie je w zmiennej **task4EL**,
- stwórzcie funkcję getAddress(elements), do której przekażecie jako argument znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnij ją adresami (o ile link posiada adres) pobranymi z elementów przekazanych jako argument.
- zwróćcie tablicę.

5 - Szukanie tagów dzieci:
- znajdźcie wszystkie dzieci elementu o klasie sample_class_3 i zapiszcie je w zmiennej **task5EL**,
- do funkcji, która wyszukuje tagi elementów, przekażecie jako argument, znalezione dzieci.