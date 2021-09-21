// fetch API
/**
 * The promise is only ever rejeted when we get some kind network error 
 * e.g. if we're offline or we can't reach the API for some reason.
 * This could give us a Response object with a status error of 404, that means that
 * the resource can't be found
 */
fetch('https://jsonplaceholder.typicode.com/todos/').then((res) => {
    console.log('resolve', res);
    return res.json(); // this method get us the data and it parsses it. Returns a promise
    // const data = res.json(); // this won't work
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error('rejected', err);
});