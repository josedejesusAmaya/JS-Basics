function isBalanced(input) {
    let res = true;
    // input = input.replace(/[^/[,\]/,(,),{,}/]/g,"");
    let openerBrackets = [];
    [...input].forEach(bracket => {
        switch (bracket) {
            case "]":
                if (openerBrackets.pop() !== "[") return false;
                break;

            case ")":
                if (openerBrackets.pop() !== "(") return false;
                break;

            case "}":
                if (openerBrackets.pop() !== "{") return false;
                break;
        
            default:
                openerBrackets.push(bracket);
                break;
        }
    });
    return openerBrackets.length === 0;
}

let res = isBalanced('{{[[(())]]}}');
console.log(`${res ? 'The input is balanced' : 'The input isn\'t balanced'}`);