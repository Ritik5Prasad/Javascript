// Proxies in JavaScript
//  provide a way to intercept
//   and customize operations on 
//   objects. They allow for
//    fine-grained control over
//     object behavior by providing
//      traps for various operations 
//      like getting and setting properties, function invocation, and more.


const target = {
    name: 'John',
    age: 30
  };
  
  const handler = {
    get: function(target, prop, receiver) {
      console.log(`Getting property "${prop}"`);
      return Reflect.get(target, prop, receiver);
    },
    set: function(target, prop, value, receiver) {
      console.log(`Setting property "${prop}" to "${value}"`);
      return Reflect.set(target, prop, value, receiver);
    }
  };
  
  const proxy = new Proxy(target, handler);
  console.log(proxy.name); // Output: Getting property "name" | John
  proxy.age = 35; // Output: Setting property "age" to "35"
  