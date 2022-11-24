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

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// reader.question('What do you think of JavaScript? ', answer => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   reader.question('What do you REALLY think of JavaScript? ', response => {
//       console.log(`You said: ${response}. Thank you for your honesty.`);
//       reader.close();
//   });
// });

Function.prototype.myBind = function(context) {
  return () => { this.apply(context); }
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? `, (answer) => {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
    // reader.close();
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, false, outerBubbleSortLoop);
      }
    })
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

// innerBubbleSortLoop([2, 3, 1, 5, 4, 6], 1, false, () => { console.log("in outer bubble sort") })
// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// reader.question('What do you think of JavaScript? ', answer => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   reader.question('What do you REALLY think of JavaScript? ', response => {
//       console.log(`You said: ${response}. Thank you for your honesty.`);
//       reader.close();
//   });
// });


Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  console.log(this)
  return function() {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(()=>{
        tooSoon = false;
        this()
      }, interval)
    }
  }
}

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 1000);

// You can use clearInterval to stop the firing:
// clearInterval(interval);


// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
  neuron.fire();
}, 10);