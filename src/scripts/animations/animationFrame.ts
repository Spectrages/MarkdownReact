let timestamp: number = 0;
let speed: number = 50;
let positionX: number = 0;

export const moveFrame = (squareRef: HTMLDivElement, fieldRef: HTMLElement, time: number) => {
    const articleWidth: number = fieldRef?.clientWidth - squareRef?.getBoundingClientRect().width - 10;
    const step = () => {
        if (!timestamp) timestamp = time;
        positionX += speed * (timestamp / 100);
        squareRef.style.transform = `translateX(${positionX}px)`;
        if (positionX >= articleWidth || positionX <= 0) speed *= -1;
        requestAnimationFrame(step);
    }
    return requestAnimationFrame(step);
}