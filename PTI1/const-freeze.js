// 'use strict';
const alligator = {
    canFly: true
}

Object.freeze(alligator);

alligator.canFly = false;

console.log(alligator);
