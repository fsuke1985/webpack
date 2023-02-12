/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const cb = json => {
  console.log(json);
};
(async function (url, cb) {
  fetch(url).then(response => response.json()) // json convert
  .then(data => {
    // OK
    cb(data);
  }).catch(error => console.error(error)); // NG
})('https://qiita.com/api/v2/items', cb);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLEVBQUUsR0FBSUMsSUFBSSxJQUFLO0VBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0FBQ25CLENBQUM7QUFFRCxDQUFDLGdCQUFnQkcsR0FBRyxFQUFFSixFQUFFLEVBQUU7RUFFeEJLLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQ1RFLElBQUksQ0FBRUMsUUFBUSxJQUFLQSxRQUFRLENBQUNOLElBQUksRUFBRSxDQUFDLENBQUM7RUFBQSxDQUNwQ0ssSUFBSSxDQUFFRSxJQUFJLElBQUs7SUFBcUI7SUFDbkNSLEVBQUUsQ0FBQ1EsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBRUMsS0FBSyxJQUFLUixPQUFPLENBQUNRLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTNDLENBQUMsRUFBRSxnQ0FBZ0MsRUFBRVYsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2IgPSAoanNvbikgPT4ge1xuICBjb25zb2xlLmxvZyhqc29uKVxufTtcblxuKGFzeW5jIGZ1bmN0aW9uICh1cmwsIGNiKSB7XG5cbiAgZmV0Y2godXJsKVxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkgLy8ganNvbiBjb252ZXJ0XG4gIC50aGVuKChkYXRhKSA9PiB7ICAgICAgICAgICAgICAgICAgICAvLyBPS1xuICAgIGNiKGRhdGEpXG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsgLy8gTkdcbiAgXG59KSgnaHR0cHM6Ly9xaWl0YS5jb20vYXBpL3YyL2l0ZW1zJywgY2IpXG4iXSwibmFtZXMiOlsiY2IiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9