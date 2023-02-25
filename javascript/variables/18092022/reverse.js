//-------------------Example 1: Reversing the Elements of an Array--------

var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
console.log("Original Array: " + languages);

// reversing array order
reversed_arr = languages.reverse();

// reverse() modifies the original array
console.log("Array after reverse(): " + languages);

// reverse() also returns the reversed array
console.log("Return Value of reverse(): " + reversed_arr);


//-------------------Example 2 :reverse of an array-----------------
const sensorData = [
  {
   id: 1,
   date: '20-Dec-2021',
   maxTemp: 34,
   minTemp:25,
  }, 
  {
   id: 2,
   date: '22-Dec-2021',
   maxTemp: 31,
   minTemp:19,
  }, 
  {
   id: 3,
   date: '23-Dec-2021',
   maxTemp: 35,
   minTemp: 29,
  },
  {
   id: 4,
   date: '26-Dec-2021',
   maxTemp: 38,
   minTemp: 28,
  },
];

for (const data of sensorData.reverse())
{
  console.log(`${data.date} | MAX: ${data.maxTemp}, MIN: ${data.minTemp}`);
}
 