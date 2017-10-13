function removeTransition(e) {
    // 省略掉其他 propertyName 不是 transform 的物件 
    // 效果結束之後會回傳 propertyName = transform（也就是 transition 結束，transitionend 被觸發時）
    if (e.propertyName !== "transform") return; 
    e.target.classList.toggle("playing", false); 
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0; // 每次回到音效檔的起始點
    audio.play();
}

// querySelectorAll 會選出所有具有該 class 的元素，並回傳為一 NodeList
const keys = Array.from(document.querySelectorAll('.key')); 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// transitionend event is fired when a CSS transition has completed
window.addEventListener('keydown', playSound);