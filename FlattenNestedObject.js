// Flatten a nested object into single depth object

const flattenObject = (obj) => {
    let result = {} //resulted flatten obj
    //loop through the given obj
    for(const i in obj){
        //check if the type of 'i' 
        if(typeof obj[i] === 'object' && !Array.isArray(obj[i])){
            //if found another nested obj we need to flatten it by calling the function again using recursion
            const temp = flattenObject(obj[i]);
            for(const j in temp){
                // store temp in result 
                result[i + "." + j] = temp[j];
            }

        }else{
            result[i] = obj[i]
        }
    }
    return result;

}

// let nestedObj={
//     "company":"GeeksForGeeks",
//     "address":"Noida",
//     "contact":"+92209556612",
//     "mentor":{
//         "HTML": "GFG",
//         "CSS": "GFG",
//         "JS": "GFG",
//     }
// }

let nestedObj={
    a:{
        b:{
            c:1
        },
        d:2
    },
    e:3

}


console.log(flattenObject(nestedObj));

