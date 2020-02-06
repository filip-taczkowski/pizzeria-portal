# Dashboard
- `/`
  - statystyki dzisiejszych zamóień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie
-`/login`
  - pola na login i hasło
  - guzik do zalogowania(link do dashboardu)

# Widok dostępności stolików
-`/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji i wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sąróżne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
-`/tables/booking/:id`
  - zawiera wszystkie informacje dot. rezerwacji
  - umożliwa edycję i zapisanie zmian
-`/tables/booking/new`
  - analogincznie do powyższej, bez początkowych informacji
-`/tables/events/:id`
  - analogincznie do powyższej, bez eventów
-`/tables/events/new`
  - - analogincznie do powyższej, dla eventów, bez początkowych informacji

# Widok klenera
-`/waiter`
 - tabela
  - w wierszach stoliki
  - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
  - w ostatniej kolumnie dostępne akcje dla danego stolika
-`/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zmówienie (zamówione produkty z opcjami i ceną)
  - kwota zmówienia
-`/waiter/order/"id`
  - jak powyższa

# Widok kuchni
-`/kitchen`
  - wyświetlać listę zmówień w kolejności ich złożenia
    - lista musi zawierać numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
