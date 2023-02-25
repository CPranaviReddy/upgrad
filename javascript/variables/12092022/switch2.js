let item = 'bottle-gourd';
let type;
switch (item){
    case 'apple':
    case 'banana':
    case  'kiwi':
    case  'grapes':
    type ='fruit';
break;
     case 'potato':
     case  'mirchi':
    case  'tomato':
    case  'bottle-gourd':
    type = 'vegetable';
    break;
    default:{
        throw new Error('unable to identify item' );
    }
}
console.log(`${item} is a ${type}`);


