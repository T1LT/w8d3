class Clock {
  constructor() {
    let time = new Date;
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();
    this.printTime();
    // setInterval(this._tick.bind(this), 1000);
    setInterval(() => this._tick(), 1000);
  } 

  printTime() {
    if (this.minutes < 10 && this.minutes !== `0${this.minutes}`) {
      this.minutes = `0${this.minutes}`;
    }
    if (this.seconds < 10 && this.seconds !== `0${this.seconds}`) {
      this.seconds = `0${this.seconds}`;
    }
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
    this.printTime();
  }
}

// const clock = new Clock();


const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0){
    reader.question('Enter a number: ', (answer) => {
      console.log(sum+parseInt(answer));
      addNumbers(sum+parseInt(answer), --numsLeft, completionCallback);
    })
  }
  
  if (!numsLeft){
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// reader.question('What do you think of JavaScript? ', answer => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   reader.question('What do you REALLY think of JavaScript? ', response => {
//       console.log(`You said: ${response}. Thank you for your honesty.`);
//       reader.close();
//   });
// });