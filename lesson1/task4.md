Атрибуты тега script, отвечающие за неблокирующую работу внешних скриптов:
defer
async

Defer:
Браузер не ожидает окончания загрузки внешнего скрипта, а продолжает параллельно загружать веб-страницу. 
Если скриптов несколько, то он выполяет их строго в порядке, в котором они указаны на странице.

Async:
Загрузка скриптов не блокирует загрузку веб-страницы, а идет параллельно. Скрипт выполняется как только будет загружен. В независимости от порядка его указания в документе. Хорошо подходит для использования с внешними скриптами, которые не влияют на функционал страницы - счетчики, аналитики и т.д.