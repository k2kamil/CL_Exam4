Zadanie
---

Wasz sklep internetowy zajmuje się sprzedażą książek.   
Wprowadzacie nowy produkt do oferty czyli ebooki.  

**Stworzenie klasy bazowej**
Stwórzcie klasę o nazwie Product.   
Będzie to klasa, która w swoim konstruktorze powinna ustawiać takie dane jak 
- title - tytuł produktu ,
- author - autor

**Stworzenie obiektów**  
W związku z dodaniem do oferty nowego produktu - ebooka - stwórzcie dwie klasy dziedziczące po klasie bazowej:  
-**Ebook**,
-**Book**.

Uwtórzcie te klasy w taki sposób, aby można było na ich podstawie stworzyć następujące obiekty:  
- ebook pod tytułem **Ciemniejsze niebo** napisany przez **Ruben Eliassen**. 
- książkę pod tytułem **Najdłuższa noc** napisaną przez **Macieja Dancewicza**. 

**Wyświetlanie informacji o produkcje**
- W odpowiedniej klasie stwórzcie metodę printInfo(). 
- Do wyświetlanie wykorzystajcie ten szablon tekstu:    
`${this.constructor.name} - title: ${this.title}, author: ${this.author}`

**Zamawianie produktów**  
Wasi klienci chcą móc ściągać oraz zamawiać książki na podany adres.   
Stwórzcie w odpowiednich klasach następujące metody:
- download - która wypisuje w konsoli tekst **Ściąganie... [tutaj wstawcie tytuł]**. Niech ten tekst również będzie zwracany przez metodę oprócz wypisania w konsoli.
- order - która wypisuje w konsoli tekst **Podaj adres dostawy!** Niech ten tekst również będzie zwracany przez metodę oprócz wypisania w konsoli.

