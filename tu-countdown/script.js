document.addEventListener("DOMContentLoaded", function() {
    const endDate = new Date("May 11, 2025 00:00:00").getTime();
    const startDate = new Date("July 15, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    let timeRemaining = endDate - now;

    if (now < startDate) {
        timeRemaining = endDate - startDate;
    }

    const daysElem = document.getElementById('days');
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElem.innerHTML = days;
        hoursElem.innerHTML = hours;
        minutesElem.innerHTML = minutes;
        secondsElem.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(interval);
            daysElem.innerHTML = '0';
            hoursElem.innerHTML = '0';
            minutesElem.innerHTML = '0';
            secondsElem.innerHTML = '0';
        }
    }

    const interval = setInterval(updateCountdown, 1000);
});
