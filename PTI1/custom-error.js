class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "Runtime error";
    }
    
}

try{
    throw new CustomError("Hi, I'm a custom error");
}
catch(error) {
    // console.log(`${error.name}: ${error.message}`);
    console.log(error);
}