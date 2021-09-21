let f = function () {
    this.a = 1;
    this.b = 2;
  }
  
  let o = new f();
  
  f.prototype.b = 3;
  f.prototype.c = 4;
  
  
  console.log('a', o.a);
  console.log('b', o.b);
  console.log('c', o.c);
  console.log(Object.getPrototypeOf(o));
  console.log('d', o.d);
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(o))); // null end of the chain
