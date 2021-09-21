async function f() {
    try{
        let response = await fetch('https://some-url');
        let data = await response.json(); 
    }
    catch(error) {
        // catches errors both in fetch and response.json
        console.log('This is my error');
    }
}

f();