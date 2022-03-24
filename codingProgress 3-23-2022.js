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
          if (obj['YesOrNoForCriminal'] === "Y") //set my condition // make sure u add in Y / Yes / Yeah / Yep
          {
            violatorsList.push(obj['Name']);
            console.log( " Suspect " + obj['Name'] + ' (' + obj['Gender'] + ') ' + " tested Positive on test for Criminals");

          }

          else
          {
            nonviolatorsList.push(obj['Name']);
            console.log(" Suspect " + obj['Name'] + ' (' + obj['Gender'] + ') ' + " tested Negative on test for Criminals");
          }

      }

    return obj['Name']; //if undefined make sure all for loops have been ended first
}

/*
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
*/

//Multiple Individuals in one line of code - still an issue
console.log(OriginallistOfPeople({Name: "Jefferson Bruke Jr", YesOrNoForCriminal:"N", Gender: 'Male'},{Name: "Jodi Alba", YesOrNoForCriminal: "N", Gender: 'Male'}));


/*
console.log("This is a combined list of violators vs non violators");
console.log(violatorsList);
console.log(nonviolatorsList);
*/
