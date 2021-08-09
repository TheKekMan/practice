let sum = (a,b) => a+b;
let sumStr = (a,b) => {
    console.log(`Concat of ${a} and ${b} is "${a+b}"`);
    console.log("\"Escaping\"");
    return a+b;
};

function logic(){
    let elem = document.getElementById('result2');
    try{
        let a = "test";
        let b = "test";
        if(a == b){
            elem.innerHTML = "true";
        }
        a = "test1";
        if(a != b){
            console.log("false");
        }
    }
    catch(err){
        console.log(err.name);
        console.log(err.message);
    }
}
