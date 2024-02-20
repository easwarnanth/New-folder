const obj1 = {name: "person1", age: 5};
const obj2 = {age: 5, name: "person1"};

function compare(obj1,obj2){
    const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) 
      return false;
    for (let key of obj1Keys) {
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }
  return true;
}
console.log(compare(obj1,obj2));
