class emp {
    constructor(empname,empdept,empage){
        this.empname=empname;
        this.empdept=empdept;
        this.empage=empage;
    }
    //Getter
    getdept(){
        return this.dept();
    }
    //setter
    setdept(empdept){
        this.empdept=empdept;
    }
}
//creating an  obj
  var emp1 = new empname('Raj');
  const emp2 = new empname('Ravi');
  
  console.log(emp1.name); 
  console.log(emp2.name); 
  
  var  emp3 = new emp('Radha');
  var emp1= new empdept('finance');
  var emp3 = new empdept('marketing');
   // accessing property
   console.log(emp3.name);
    // changing the value of name property
  emp1.dept();
  emp3.dept();
  
  

empname()
    return this.name;









