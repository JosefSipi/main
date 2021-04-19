document.addEventListener("DOMContentLoaded", function(){

    const canvas = document.getElementById('mycanvas');

    const ctx = canvas.getContext('2d');

    // ctx.fillRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();

});
