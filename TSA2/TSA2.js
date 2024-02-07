function animateBox(day) {
    const boxContainer = document.querySelector('.box-container');
    const box = document.querySelector('.box');

    if (box) {
        box.remove();
    }

    const newBox = document.createElement("div");
    newBox.className = "box";
    boxContainer.appendChild(newBox);

    const button = document.querySelector(`.${day.toLowerCase()}`);
    const buttonRect = button.getBoundingClientRect();

    const color = getDayColor(day);

    newBox.style.left = "0";
    newBox.style.top = buttonRect.top + "px";
    newBox.style.borderColor = color;

    setTimeout(() => {
        newBox.style.transform = "translateY(100px)";
    }, 500);
}

/*ROYGBIV*/
function getDayColor(day) {
    const dayColors = {
        'Monday': '#FF0000',
        'Tuesday': '#FF7F00',
        'Wednesday': '#FFFF00',
        'Thursday': '#00FF00',
        'Friday': '#0000FF',
        'Saturday': '#4B0082',
        'Sunday': '#9400D3'
    };
    return dayColors[day];
}

document.querySelector('.col-12.col-md-6').addEventListener('click', function(event) {
    const clickedButton = event.target;
    if (clickedButton.classList.contains('btn')) {
        animateBox(clickedButton.textContent);
    }
});