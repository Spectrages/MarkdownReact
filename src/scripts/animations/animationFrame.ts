const squareSecond: HTMLElement | null = document.getElementById("square2");
const article: HTMLElement | null = document.getElementById("article2");

const rAF = window.requestAnimationFrame;
let animationRequest: number;
let timestamp: number = 0;
let speed: number = 50;
let positionX: number = 0;

export const moveFrame = (time: number) => {
    console.log('work')
    if(squareSecond !== null && article !== null) {
        const articleWidth: number = article.clientWidth - squareSecond.getBoundingClientRect().width + 20;
        animationRequest = rAF(moveFrame)
    if (!timestamp) {
        timestamp = time;
    }
    positionX += speed * (timestamp/1000);
    squareSecond.style.transform = `translateX(${positionX}px)`;
    if(positionX >= articleWidth || positionX <= 0) {
        speed *= -1;
    }
    }
}