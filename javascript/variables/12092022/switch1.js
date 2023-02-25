let a=30;
let b=40;
let action= 'sub';
switch(action){
    case 'sum':{
     let sum =a+b;
    console.log(`The sum is ${a} and ${b} produces ${sum}`);
    break;
    }
    case 'sub':{
     let sub =a-b;
    console.log(`The sub is ${a} and ${b} produces ${sub}`);
    break;
    }
    case 'mul':{
     let multiply = a*b;
    console.log(`The mul is ${a} and ${b} produces ${multiply}`);
    break;
    }
    case 'div':{
        let div=a/b;
    console.log(`The div is ${a} and ${b} produces ${div}`);
    break;
    }
    default:{
        throw new Error ('The action is not valid');
    }

        
}