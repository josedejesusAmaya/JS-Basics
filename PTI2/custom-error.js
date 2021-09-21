class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    console.log('hi');
    throw new Error('error from the DB');

} catch(err) {
    console.error(`${err.name}: ${err.message}`);
}