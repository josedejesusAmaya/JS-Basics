// Example, the same goes with "break"
loop1:
for (i = 0; i < 3; i++) {  //The first for statement is labeled "loop1"
    loop2:
    for (j = 0; j < 3; j++) {  //The second for statement is labeled "loop2"
        if (i === 1 && j === 1) {
            continue loop1; //skip to the next iteration of the "loop1" loop
        }
        console.log('i = ' + i + ', j = ' + j);
    }
}

/* 
Output:
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2
*/

// https://www.tabnine.com/academy/javascript/how-to-use-settimeout/

function time () {
    console.log('hello');
}

var interval = setInterval(() => {
    time();
}, 2000);

setTimeout(() => {
    clearInterval(interval);
}, 6000);