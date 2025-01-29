const canvas = document.getElementById('road');
const ctx = canvas.getContext('2d');
const car = document.getElementById('car');

let carPosition = { top: 250, left: 100 };
let distance = 0;
let carAngle = 0;

function drawRoad() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.arc(300, 150, 150, Math.PI, 0, false); 
    ctx.lineTo(600, 300);
    ctx.arc(400, 350, 100, 0, Math.PI, false); 
    ctx.lineTo(100, 300);
    ctx.closePath();
    ctx.fillStyle = "#808080";
    ctx.fill();
}

function moveCar() {
    car.style.top = `${carPosition.top}px`;
    car.style.left = `${carPosition.left}px`;
    car.style.transform = `rotate(${carAngle}deg)`;
    document.getElementById("distance").textContent = `Distance: ${Math.abs(distance)}m`;
}

function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            carPosition.top -= 5;
            distance += 1;
            break;
        case 'ArrowDown':
            carPosition.top += 5;
            distance -= 1;
            break;
        case 'ArrowLeft':
            carAngle -= 5;
            break;
        case 'ArrowRight':
            carAngle += 5;
            break;
        default:
            return;
    }
    moveCar();
}

document.addEventListener('keydown', handleKeyDown);
