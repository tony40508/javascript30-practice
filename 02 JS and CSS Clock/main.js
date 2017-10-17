class Clock {
    constructor(id) {
        const e = document.getElementById(id);
        this.handHour = e.querySelector('.hour_hand');
        this.handMin = e.querySelector('.minute_hand');
        this.handSec = e.querySelector('.second_hand');

        this.setTime();
        this.init();
    }

    setTime() {
        const now = new Date();
        const hrs = now.getHours();
        const mins = now.getMinutes();
        const secs = now.getSeconds();

        this.tick(hrs, mins, secs);
    }

    tick(hrs, mins, secs) {
        const hrsDeg = ((hrs / 12) * 360) + 90;
        const minsDeg = ((mins / 60) * 360) + 90;
        const secsDeg = ((secs / 60) * 360) + 90;

        this.handHour.style.transform = `rotate(${hrsDeg}deg)`;
        this.handSec.style.transform = `rotate(${secsDeg}deg)`;
        this.handMin.style.transform = `rotate(${minsDeg}deg)`;

        // 讓秒針角度歸零時，不會抖一下
        if (secsDeg === 90) {
            this.handSec.style.transitionDuration = "0s";
        } else {
            this.handSec.style.transitionDuration = "0.1s";
        }
    }

    init() {
        setInterval(this.setTime.bind(this), 1000);
    }
}

let clock = new Clock("new_clock");