
function OriginallistOfPeople(obj)
{
  // writing a function that will scan a list of individuals looking for those who have broken protocal
  var newListOfPeople = {};
 for (var key in obj) //I need to go through that list of people //go though the object with its appropiate syntax (iniiation code) {
  {
    for (var  i = 0; i < obj.length; i++)  //now you can do the actual normal for loop for the lsit
    {
      if (typeof obj[key] === 'string') //when you are not filtering numbers you insert the typeof (usually for syntax or boolean)
      {
          if (obj[key] === "Y") //set my condition // make sure u add in Y / Yes / Yeah / Yep
      //identifier problem in obj here means no paranthesis
          {
              newListOfPeople.push(obj[key]);
          }
          else
          {
              return;
          }
      }
    }
  }
    return; //if undefined make sure all for loops have been ended first
}

console.log(OriginallistOfPeople([{violatedRules: "Y" },{JackRuby: "Y" }]))
  //End will end up sending it to the fcuntion itself and print that filtered list
