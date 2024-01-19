function changeColors() {
    const body = document.body;
    const leftSide = document.querySelector('.container .left_Side');
    const rightSide = document.querySelector('.container .right_Side');

    const randomColor = () => Math.floor(Math.random() * 256);
    
    const bodyBgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    const leftSideBgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    const rightSideBgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    const textColor = `rgb(${255 - randomColor()}, ${255 - randomColor()}, ${255 - randomColor()})`;

    body.style.backgroundColor = bodyBgColor;
    body.style.color = textColor;

    leftSide.querySelectorAll('*').forEach(element => {
        element.style.color = textColor;
    });

    leftSide.style.backgroundColor = leftSideBgColor;

    rightSide.querySelectorAll('*').forEach(element => {
        element.style.color = textColor;
    });

    rightSide.style.backgroundColor = rightSideBgColor;
}