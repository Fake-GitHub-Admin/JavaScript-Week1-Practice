function OriginallistOfPeople(obj)

{
  // writing a function that will scan a list of individuals looking for those who have broken protocal
 for (var key in obj)
 //I need to go through that list of people //go though the object with its appropiate syntax (iniiation code) {
  {
    if (typeof obj['YesOrNoForCriminal'] === 'string')
    //Not really needed but nice to have when you are filtering
      {
          if (obj['YesOrNoForCriminal'] === "Y") //set my condition // make sure u add in Y / Yes / Yeah / Yep
      //identifier problem in obj here means no paranthesis
          {
            return " Suspect " + obj['Name'] + '(' + obj['Gender'] + ')' + " tested Positive on test for Criminals";

          }

          else
          {
              return " Suspect " + obj['Name'] + '(' + obj['Gender'] + ')' + " tested Negative on test for Criminals";
          }
      }
  }
    return; //if undefined make sure all for loops have been ended first
}

console.log(OriginallistOfPeople({Name: "Johnny Blake", YesOrNoForCriminal:"Y",Gender: 'Male'}));
console.log(OriginallistOfPeople({Name: "Sarah Lee", YesOrNoForCriminal: "N",Gender: 'Female'}));

//Problem is that it wil it needs to hit all the objects in the lists
//Option 1: Take it to array route
//Option 2: Stay away from arrays and maybe find a way?
//Option 3: ??
console.log(OriginallistOfPeople({Name: "Jefferson Bruke Jr", YesOrNoForCriminal:"N", Gender: 'Male'},{Name: "Jodi Alba", YesOrNoForCriminal: "N", Gender: 'Male'} ))






/*
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
*/
