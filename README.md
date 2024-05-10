## Powtórka React

1. useEffect + API

- GET

Utwórz komponent PostList który wyświetla liste komponentów Post.
Komponent PostList posiada :
- stan komponentu przechowujacy liste elementów typu Post
- funkcje asynchroniczna która pobiera liste elementów i ustawia stan
- odpowiedni useEffect który wywoluje funkcje do pobierania postów podczas pierwszego renderu komponentu

- POST

Utwórz komponent PostForm który wyświetla formularz do dodawania nowego postu.
Komponent PostForm posiada:
- stan komponentu przechowujacy dane formularza
- funkcje asynchroniczna która dodaje post do bazy danych i ustawia stan
- dodaje nowy element do listy elementów typu post
- posiada propsy przez które przekazujemy funkcje która umozliwa aktualizacje listy elementów

- PUT

Edytuj komponent PostList tak aby kazdy element Post posiadał przycisk umozliwiajacy edycje,
gdy go klikniemy to zamiast textu pojawia sie formularz do edycji pojedynczego elementu
- powinna zostac utworzona rowniez funkcja asynchroniczna która aktualizuje pojedynczy element po ID

- DELETE

Edytuj komponent PostList tak aby kazdy element Post posiadał przycisk umozliwiajacy usuniecie
- powinna zostac utworzona rowniez funkcja asynchroniczna która usuwa pojedynczy element po ID

2. Custom hook

- Na bazie utworzonej logiki utwórz custom hook "usePost" który będzie uzyty we wspólnym rodzicu w którym użyte są wszystkie komponenty utworzone powyżej.

- ten krok jest jedynie "przesuwa" logike aplikacji z jednego miejsca do drugiego, co za tym idzie działanie aplikacji nie powinno sie zmienić

3. Context

- Aktualnie mamy utworzona logike i przekazujemy wszystko co potrzebne przez propsy.
- Zamiast tego należy utworzyć context aplikacji tak aby utworzyć stan globalny i dostęp do całej logiki


## React router

1. Prosta nawigacja

- Utwórz 5 prostych komponentów w folderze "pages" o nazwie Home, About, Contact, Settings, UserList
- Każdy z komponentów powinien tylko posiadac tekst dla odróżnienia stron
- Utwórz następnie nawigacje strony w pliku App.tsx która będzę posiadać sciezki do stron utworzonych na bazie komponentów powyżej

1.1 Nawigacja
 
- Utwórz komponent <Nav> który posiada liste linków do nawigacji - wykorzystaj do tego komponent <NavLink>

2. Parametry nawigacji

- Utwórz komponent User który będzie wypisywał informacje o pojedyńczym użytkowniku
- Komponent User powinien odczytywac id przekazane przez parametry URL
- Utwórz nawigacje do strony User w pliku App.tsx uwzględniając zagnieżdzenie w <Router> i parametr id w scieżce

3. Przekierowanie 

- Utwórz w komponencie settings stan (isLogged) który przechowuje wartosc boolean
- komponent ten powinien przekierować użytkownika na strone główną jeżeli isLogged jest na true za pomoca <Navigate to="/" replace>



## Projekt podsumowujący

Projekt: Menedżer Użytkowników

Celem projektu jest stworzenie aplikacji webowej, która umożliwia zarządzanie listą użytkowników. Aplikacja będzie korzystać z zewnętrznego API do pobierania, tworzenia, aktualizowania i usuwania danych o użytkownikach.

Funkcjonalności:

Lista użytkowników: Użytkownik będzie mógł wyświetlić listę wszystkich zarejestrowanych użytkowników w systemie.

Szczegóły użytkownika: Po kliknięciu na wybranego użytkownika, użytkownik zostanie przekierowany do strony ze szczegółowymi informacjami o tym użytkowniku, takimi jak imię, nazwisko, adres e-mail, numer telefonu, itp.

Dodawanie nowego użytkownika: Aplikacja będzie posiadać formularz umożliwiający dodanie nowego użytkownika do systemu.

Edycja użytkownika: Użytkownik będzie mógł edytować dane istniejącego użytkownika.

Usuwanie użytkownika: Użytkownik będzie mógł usunąć istniejącego użytkownika z systemu.

Nawigacja: Aplikacja będzie posiadać kilka stron, między którymi użytkownik będzie mógł się przemieszczać za pomocą React Router.

Technologie:

React: Aplikacja będzie zbudowana przy użyciu biblioteki React, wykorzystując komponenty funkcyjne.
React Router: Do obsługi nawigacji między stronami aplikacji.
Fetch API: Do komunikacji z zewnętrznym API i pobierania, tworzenia, aktualizowania oraz usuwania danych o użytkownikach.
React Context lub Redux: Do zarządzania stanem aplikacji (np. przechowywania listy użytkowników, wybranego użytkownika, etc.).
Struktura projektu:

Strona główna: Zawiera listę wszystkich użytkowników.
Strona szczegółów użytkownika: Wyświetla szczegółowe informacje o wybranym użytkowniku.
Strona dodawania użytkownika: Zawiera formularz do dodawania nowego użytkownika.
Strona edycji użytkownika: Zawiera formularz do edycji danych istniejącego użytkownika.
Komponenty:
UserList: Komponent wyświetlający listę użytkowników.
UserDetails: Komponent wyświetlający szczegóły wybranego użytkownika.
UserForm: Komponent zawierający formularz do dodawania lub edycji użytkownika.
Navigation: Komponent odpowiedzialny za nawigację między stronami.
Przykładowy przebieg:

Użytkownik przegląda listę wszystkich użytkowników na stronie głównej.
Użytkownik klika na wybranego użytkownika, co powoduje przekierowanie do strony UserDetails za pomocą React Router.
Strona UserDetails pobiera szczegółowe informacje o użytkowniku z API i wyświetla je w odpowiednim komponencie.
Użytkownik może przejść do strony AddUser i wypełnić formularz, aby dodać nowego użytkownika do systemu.
Aplikacja wysyła żądanie POST do API za pomocą fetch, tworząc nowego użytkownika.
Użytkownik może edytować dane istniejącego użytkownika na stronie EditUser.
Aplikacja wysyła żądanie PUT do API za pomocą fetch, aktualizując dane użytkownika.
Użytkownik może usunąć istniejącego użytkownika z listy, a aplikacja wyśle żądanie DELETE do API.
Użytkownik może nawigować między stronami aplikacji za pomocą komponentu Navigation.