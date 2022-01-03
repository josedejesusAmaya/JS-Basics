/**
 * https://www.storyofmathematics.com/row-vector
 * Classes,	Constructor, new
    Create a Vector	object that	supports addition, subtraction,	dot	products, and norms. So, for example:
    var	a	=	new	Vector([1,	2,	3]);
    var	b	=	new	Vector([3,	4,	5]);
    var	c	=	new	Vector([5,	6,	7,	8]);
    a.add(b);						//	should return	a	new	Vector([4,	6,	8])
    a.subtract(b);	                //	should	return	a	new	Vector([-2,	-2, -2])
    a.dot(b);						//	should	return	1*3	+	2*4	+	3*5	=	26
    a.norm();						//	should	return	sqrt(1^2	+	2^2	+	3^2)	=	sqrt(14)
    a.add(c);						//	throws	an	error

    If you try to add, subtract, or dot	two	vectors	with different lengths,	you	must throw an error.
    
    Also provide:
    1. a toString method, so that using the vectors from above, a.toString() === '(1,2,3)'
    2. an equals method, to	check that two vectors that	have the same components are equal
 */

const Vector = require('./vector.js');



let	a	=	new	Vector([1,	2,	3]);
let	b	=	new	Vector([3,	4,	5]);
let	c	=	new	Vector([5,	6,	7,	8]);

console.info(a.add(b));
console.info(a.add(c));
console.info(a.norm());
console.info(a.equalTo(a));
console.info(a.dot(b));
console.info(a.subtract(b));
console.info(a.toString() === '(1,2,3)');
console.info(a.toString());

/**
 */