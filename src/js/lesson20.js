const options = {
    name :'test',
    height : 1024,
    width : 768,
    colors : {
        border: 'black',
        bg: 'blue',
    },
    fonts : {
        italic: 'big',
        bold: '24',   
    }
};
for (let k in options){
    if (typeof (options[k]) === 'object'){
        for( let i in options[k]){
            console.log (`${[i]} is ${options[k][i]}`); 
        }
    } else {
        console.log (`${[k]} is ${options[k]}`);   
    }
}
console.log (Object.keys(options));