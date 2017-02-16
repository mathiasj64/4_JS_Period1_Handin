let names = ["kurt", "Ib", "Lars", "Ida"];


function myFilter(arr,callback)
{
    let arrayToReturn = [];
    arr.forEach(function(name)
    {
        let shouldInclude = callback(name);
        if(shouldInclude)
        {
            arrayToReturn.push(name);
        }
    })
    return arrayToReturn;
}

let names2 = myFilter(names,function(name){
    return name.length <=3;
});
console.log("");
console.log(names2);