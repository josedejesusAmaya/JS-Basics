// promise example
const getFetch = () => {
    return new Promise((resolve, reject) => {
        // fetch('https://jsonplaceholder.typicode.com/todos/')
        resolve('some data');
        reject('some error');
    });
};

const getTodosProm = () => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        // specific event listener and a specific event called ready stage change
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("could not get data ");
            }
        });
        
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        // request.open('GET', 'todos.json');
        request.send();
    });
}

// this could be a little bit confusing having two functions inside then
getFetch().then((data) => { console.log(data); }, (err) => { console.log(err); });

// we can catch the error outside of the then 
// usign .catch give me a text as output "could not get data"

getTodosProm()
    .then((data) => { 
        console.log('1', data); 
        return getTodosProm(); // nested promises
    }).then((data) => {
        console.log('2', data);
    })
    .catch((err) => {
        console.error(err)
    });

