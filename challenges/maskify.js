function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, '#');
}

const output = maskify('4556364693562316');
console.log(output);