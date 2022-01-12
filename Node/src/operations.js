const addition = (a, b) => { //less memory than function expression
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

// module.exports.addition = addition

// CommonJS module
module.exports = {
    addition,
    multiplication
}

// ES module
// const _addition = addition;
// export { _addition as addition };
