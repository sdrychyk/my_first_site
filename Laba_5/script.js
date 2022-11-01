document.addEventListener('DOMContentLoaded', () => {
    const studying = new Date('Dec 3 2022 00:00:00')
    const daysVal = document.querySelector('.timer_days .timer_val')
    const hoursVal = document.querySelector('.timer_hours .timer_val')
    const minutesVal = document.querySelector('.timer_minutes .timer_val')
    const secondsVal = document.querySelector('.timer_seconds .timer_val')
    const timer = () => {
        let now = new Date();
        let until = studying - now;
        
        let days = Math.floor(until / 1000 / 60 / 60 / 24);
        let hours = Math.floor(until / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(until / 1000 / 60) % 60;
        let seconds = Math.floor(until / 1000) % 60;
        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;
    };
    timer();
    setInterval(timer, 1000);
});