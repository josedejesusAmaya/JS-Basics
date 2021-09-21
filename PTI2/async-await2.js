const getTodos = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todoss/'); // this is still resolving
        console.log('res', res);
        if (!res.ok) {
            throw new Error('cannot fetch the data');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

getTodos()
    .then(data => console.log('Data', data))
    .catch(err => console.error('Err', err.message));
