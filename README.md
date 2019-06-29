# Unix time

Get Unix time exactly in seconds or offset.

```js
import timestamp from 'unix-timestamp-offset';

console.log(timestamp()); // 1561555000
console.log(timestamp(10)); // 1561555010
console.log(timestamp(-10)); // 1561554990

```

Можно использовать для получения точного времени в формате `Unix time` (также POSIX-время). На удивление, в _javascript_ нет простого способа получить такое время. Например, в PHP нам достаточно вызвать `time()` — Возвращает текущую метку системного времени Unix, возвращает количество секунд, прошедших с начала эпохи Unix (1 января 1970 00:00:00 GMT) до текущего времени. JavaScript метод `Date.now()` возвращает количество **миллисекунд**, прошедших с 1 января 1970 года 00:00:00 по UTC. ¯\_(ツ)_/¯

Когда бэкенд у нас на PHP, и мы используем метку времени _timestamp_, нам нужно везде делить время на 1000 и округлять. Или подключать библиотеки или импортировать метод для этой задачи. Импортируйте метод как вам удобно, если вам нужно всего лишь получить время в формате Unix timestamp.

```js
import timestamp from 'unix-timestamp-offset';
import time_stamp from 'unix-timestamp-offset';
import unix-time from 'unix-timestamp-offset';
import time from 'unix-timestamp-offset';
```

Дополнительно, метод вызванный с параметром устанавливает смещение от настоящего времени. Доступно смещение вперед и отрицательное смещение в прошлое. Пакет используется дальше, чтобы получить расхождение меток времени Сервера и Клиента в пакете `expires-unixtime`. Который затем импортируется в пакет, определяющий просрочен ли JWT токен, и сколько времени ему осталось.

