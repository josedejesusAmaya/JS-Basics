const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    // specific event listener and a specific event called ready stage change
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(null, data);
        } else if (request.readyState === 4) {
            callback("could not get data ", null);
        }
    });

    // simplest way to perform this task
    // request.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //             const data = JSON.parse(this.responseText);
    //             callback(null, data); 
    //     }
    //     else if (this.readyState == 4) {
    //              callback("could not get data", null);
    //     } 
    // };

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // request.open('GET', 'todos.json');
    request.send();
};

getTodos((err, data) => {
    // if (err) {
    //     console.log(err);
    // } else {
    //     console.log(data);
    // }
    // callback hell
    console.log(data);
    getTodos((err, data) => {
        console.log(data);
        getTodos((err, data) => {
            console.log(data);
            getTodos((err, data) => {
                console.log(data);

            });
        });
    });
});

