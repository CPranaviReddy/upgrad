var colors=["violet","Indigo","Blue","Green","Yellow","Orange","Red"];
var [color1,color2,color3]=colors;
console.log(color1);
console.log(color2);
console.log(color3);
var [color1, , ,color4, ,color6] = colors;
console.log(color1); 
console.log(color4);
console.log(color6);   

var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args); 

let veggies=["carrot","beetroot","chilli","abc","hji","arc"];
let [veg1, ,veg3,...args1]=veggies;
console.log(veg1);
console.log(veg3);
console.log(args1);
