//----------------------- Protected ---------------------------
class CoffeeMachine {
    _waterAmount = 0;  // protected variable waterAmount
  
    constructor(power) {
        this._power = power;   // protected variable power
      }  

    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }

    get power() {
        return this._power;
      }
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = 10; 

  console.log(`Power is: ${coffeeMachine.power}W`);
  console.log('Water Amount in coffe machine: '+ coffeeMachine.waterAmount);


//------------------------ Private---------------------------
class CoffeeMachine_New {
    #waterLimit = 200;         //private variable
  
    #fixWaterAmount(value) {   //private method
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }

    get water(){
        return this.#waterLimit;
    }

    display()
    {
      this.#fixWaterAmount(30);
    }
  }
  
  let coffeeMachine1 = new CoffeeMachine_New();
  
   // can't access privates from outside of the class
    //coffeeMachine1.#fixWaterAmount(123); // Error
    //coffeeMachine1.#waterLimit = 1000; // Error
  console.log(coffeeMachine1.water);  // this will access private variable using get method
  console.log(coffeeMachine1.display); //this will access the private method using the display method