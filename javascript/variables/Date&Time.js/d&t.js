const date1 = new date ("2020-07");
console.log(date1);//wed jul 01 2020 05:45:00 gmt+0545
const date2 = new date("2020");
console.log(date2);//wed jan 01 2020 05:45:00 gmt+0545
//in js months are calculated from 0 to 11 and jan is 0 and dec is 11
//new date( year,month,day hours , minutes,seconds,millisec)
const time1=new date(2020,1,20,4);
console.log(time1);
const time2  = new date(2020,1);
console.log(time2);


    