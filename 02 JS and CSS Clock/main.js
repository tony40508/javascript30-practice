const secondHand = document.querySelector('.second_hand');
const minsHand = document.querySelector('.min_hand');
const hourHand = document.querySelector('.hour_hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    // console.log(hourDegrees);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    // 讓秒針角度歸零時，不會抖一下
    if (secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none') // remove the all 0.05s transition
    } else {
        allHands.forEach(hand => hand.style.transition = '')
    }
}
setInterval(setDate, 1000);
setDate();