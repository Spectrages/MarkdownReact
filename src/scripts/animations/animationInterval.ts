
const squareFirst: HTMLElement | null = document?.getElementById('square1');
const articleWidth: HTMLElement | null = document?.getElementById('article1');
let direction: string = 'left';
let i: number = 0;

export const moveInterval = () => {
  if (squareFirst !== null && articleWidth !== null) {
    const widthInterval = articleWidth.clientWidth - squareFirst.getBoundingClientRect().width + 20;
    if (i > widthInterval) {
      direction = 'right'
    }
    else if (i < 0) {
      direction = 'left'
    }
    if (direction === 'left') {
      squareFirst.style.transform = `translateX(${i}px)`;
      i++;
    }
    else if (direction === 'right') {
      squareFirst.style.transform = `translateX(${i}px)`;
      i--;
    }
  }
};