// window elemnt
window.addEventListener('load', ()=>{
    resize(); // Resize the canvas once the window is loads
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);
});
// declare variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); // canvans for 2 dimensional operations
let coord = {x:0, y:0}; // Stores the initial position of the cursor
let paint = false; // trigger drawing
// Resize the canvas to the available size of the window.
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
// Update the coordinates of the cursor
function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}
// Start and stop drawing
function startPainting(event) {
    paint = true;
    getPosition(event);
}
function stopPainting() {
    paint = false;
}
function sketch(event) {
    if(!paint) return;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'green';
    ctx.moveTo(coord.x, coord.y);
    getPosition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}