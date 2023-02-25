let today = 5;//newdate(). getday();
let day = today === 0 ? 'sunday' :
          today ===1 ? 'monday' :
          today ===2 ? 'tuesday' :
          today ===3 ? 'wednesday':
          today === 4 ? 'thursday' :
          today === 5 ? 'friday' :
          today === 6 ? 'saturday' :
          ' not exactly a real day';
          console.log(`today is ${day}`);


