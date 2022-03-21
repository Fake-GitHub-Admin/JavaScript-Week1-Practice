
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
            return " Suspect " + obj['Name'] + " test Positive on test for Criminals";

          }

          else
          {
              return " Suspect " + obj['Name'] + " tested Negative on test for Criminals";
          }
      }
  }
    return; //if undefined make sure all for loops have been ended first
}

console.log(OriginallistOfPeople({Name: "Johnny Blake", YesOrNoForCriminal:"Y"}));
console.log(OriginallistOfPeople({Name: "Sarah Lee", YesOrNoForCriminal: "N"}));








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
