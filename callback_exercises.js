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

const clock = new Clock();