console.log("Default function results:")

//default function
function simpleInterest(P,T=5,R=10){
    var amount = (P *T * R) / 100;
	console.log("Simple Interest : " + amount );
}


simpleInterest(2000)
simpleInterest(1000)
simpleInterest(5000)
    
console.log("Arrow function results:")
    //arrow function
    
    let arrow_si= (P,T,R)=>console.log(P*T*R/100);
    arrow_si(2000,5,10);
    arrow_si(1000,5,10);
    arrow_si(5000,5,10);

    //Function Expression
    console.log("Expression function results:")
    const exp_simpleInterest = function(p,t,r)
    {
        return p*t*r/100; 
    }
    const result= exp_simpleInterest(2000,5,10)
    console.log(result);

    const result2= exp_simpleInterest(1000,5,10)
    console.log(result2);
    const result3= exp_simpleInterest(5000,5,10)
    console.log(result3);
    


    
    


   
