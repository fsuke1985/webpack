const cb = (json) => {
  console.log(json)
};

(async function (url, cb) {

  fetch(url)
  .then((response) => response.json()) // json convert
  .then((data) => {                    // OK
    cb(data)
  })
  .catch((error) => console.error(error)); // NG
  
})('https://qiita.com/api/v2/items', cb)
