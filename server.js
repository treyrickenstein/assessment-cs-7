function sumZero(arr) 
{
    var total = 0
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if (arr[i] + arr[j] == 0)
            {
                return true
            }
        }
    } 
    return false
}
//I think it will take 2 ms to run

console.log(sumZero([]))
// -> False


console.log(sumZero([1]))
// -> False


console.log(sumZero([1, 2, 3]))
// -> False


console.log(sumZero([1, 2, 3, -2]))
// -> True

function uniqueChars(arr) 
{
    var total = 0
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if (arr[i] == arr[j])
            {
                return false
            }
        }
    } 
    return true
}

uniqueChars("Monday");
console.log(uniqueChars("Monday"))
// -> True

uniqueChars("Moonday");
console.log(uniqueChars("Moonday"))
// -> False


function isPangram(arr) 
{
  
    var total = 0
    var str = "";
    for(let i = 0; i < arr.length; i++)
    {
      
      if(arr.charCodeAt(i) >= 65 && arr.charCodeAt(i)<= 90 
         || arr.charCodeAt(i) >= 97 && arr.charCodeAt(i)<= 122 )
      {
        total++;
        str+=arr[i]
      } 
    } 
  if(total>=26)
  {
    return true;
  }
  return false; 
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

function findLongestWord(arr)
{
    var longest = arr[0].length;
    for (let i = 0; i < arr.length; i++)
    {
        if (longest < arr[i].length)
        {
            longest = arr[i].length;

        }
    } 
    return longest
}

let getValue = findLongestWord(["hi", "hello"]);
// -> 5
console.log(getValue);