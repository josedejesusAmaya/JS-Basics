const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todoss/'); // this is still resolving

    if (!res.ok) {
        throw new Error('cannot fetch the data');
    }
    const data = await res.json();
    return data;
}

console.log('1');

getTodos()
    .then(data => console.log('Data', data))
    .catch(err => console.error('Err', err.message));


    console.log('2');
console.log('3');
console.log('4');
console.log('5');