
console.log("Added Random Reference Code to help out");
function addObjectProperty(obj1,key,obj2) {
  obj1[key] = obj2
  return obj2;
}
var person1 = {
  name: "John Blow",
  roles: 'schlub'
};
var person2 = {
  name: "Mr.Burns",
  roles: "supervisor"
};
console.log(person1.roles);
console.log(person2.roles);


console.log("Second Reference Used as well as the inputed Links");
//Side note I tried to use that for loop again but no luck
// 3/24 - //New Code Reference from https://onecompiler.com/javascript/3xx3maqxe

function KeyOfObjectValuer(obj,target) {
  for (var key in obj) {
    if (obj['YesOrNoForCriminal'] === 'Y') {
      console.log(obj['Name']);
    }
    else {
      console.log('Error');
    }
  }
}

//Tested it it is still the same issue
