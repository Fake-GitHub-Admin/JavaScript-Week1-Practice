//3/23  added new empty arrays to store in names
var violatorsList = []; // I am going to store all the names to between the lists
var nonviolatorsList = [];
function OriginallistOfPeople(obj)

{
  // writing a function that will scan a list of individuals looking for those who have broken protocal
 // 3/23/2022 //for (var key in obj) //for loop is not doing anything as the input will automatically go into the set conditions
    if (typeof obj['YesOrNoForCriminal'] === 'string')
    //Not really needed but nice to have when you are filtering
      {
          if (obj['YesOrNoForCriminal'] === "Y" || obj['YesOrNoForCriminal'] === "Yep" || obj['YesOrNoForCriminal'] === "Yeah" || obj['YesOrNoForCriminal'] === "Yes")
          //set my condition // make sure u add in Y / Yes / Yeah / Yep
          {
            violatorsList.push(obj['Name']);
            console.log( " Suspect " + obj['Name'] + ' (' + obj['Gender'] + ') ' + " tested Positive on test for Criminals");

          }

          else if (obj['YesOrNoForCriminal'] === "N" || obj['YesOrNoForCriminal'] === "Nah" || obj['YesOrNoForCriminal'] === "Nope" || obj['YesOrNoForCriminal'] === "No")
          {
            nonviolatorsList.push(obj['Name']);
            console.log(" Suspect " + obj['Name'] + ' (' + obj['Gender'] + ') ' + " tested Negative on test for Criminals");
          }

          else
          {
            console.log('Hey ' + obj['Name'] + " Respond with a Y/N, Yes/No, Yeah/Nope, or  Nah/Yep");
          }

      }
    return ''; //if undefined make sure all for loops have been ended first
}





console.log("This is in bulleted list of everyone now");
//Traditional single subject print
console.log(OriginallistOfPeople({Name: "Johnny Blake", YesOrNoForCriminal:"Y",Gender: 'Male'}));
console.log(OriginallistOfPeople({Name: "Sarah Lee", YesOrNoForCriminal: "N",Gender: 'Female'}));
console.log(OriginallistOfPeople({Name: "Emerson Brown", YesOrNoForCriminal:"Y",Gender: 'Male'}));
console.log(OriginallistOfPeople({Name: "Rose Elana", YesOrNoForCriminal: "Y",Gender: 'Female'}));
console.log(OriginallistOfPeople({Name: "Joe Scott", YesOrNoForCriminal:"Y",Gender: 'Male'}));
console.log(OriginallistOfPeople({Name: "Lena Petrovic", YesOrNoForCriminal: "N",Gender: 'Female'}));
console.log(OriginallistOfPeople({Name: "Mathew Puck", YesOrNoForCriminal:"N",Gender: 'Male'}));
console.log(OriginallistOfPeople({Name: "Eberhault Wick", YesOrNoForCriminal: "N",Gender: 'Female'}));
console.log(OriginallistOfPeople({Name: "Jim Carly", YesOrNoForCriminal: "Y",Gender: 'Male'}));


//Multiple Individuals in one line of code - resolved
//In order for this to work, first the objects can't be seperated from one another when this happens I need to reassign different object keys which would complicate things
//console.log(OriginallistOfPeople({Name: "Jefferson Bruke Jr", YesOrNoForCriminal:"Y", Gender: 'Male', Name: "Jodi Alba", YesOrNoForCriminal: "N", Gender: 'Male'}));


console.log("This is a combined list of violators vs non violators");
console.log(violatorsList);
console.log(nonviolatorsList);



//This code is to trigger that else reaction

console.log(OriginallistOfPeople({Name: "Jim Carly", YesOrNoForCriminal: "Yogurt",Gender: 'Male'}));




//Side note I tried to use that for loop again but no luck
// 3/24 - //New Code Reference from https://onecompiler.com/javascript/3xx3maqxe
/*
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
*/
//Tested it it is still the same issue
