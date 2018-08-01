let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// canvas 绘图基于状态的绘制
context.lineWidth = 10;

// 三个右箭头
context.beginPath();
context.lineTo(100, 200);
context.lineTo(300, 400);
context.lineTo(100, 600);
context.strokeStyle = "red";
context.stroke();

context.beginPath();
context.lineTo(300, 200);
context.lineTo(500, 400);
context.lineTo(300, 600);
context.strokeStyle = "green";
context.stroke();

context.beginPath();
context.lineTo(500, 200);
context.lineTo(700, 400);
context.lineTo(500, 600);
context.strokeStyle = "blue";
context.stroke();

/*
// 箭头
context.moveTo(100, 350);
context.lineTo(500, 350);
context.lineTo(500, 200);
context.lineTo(700, 400);
context.lineTo(500, 600);
context.lineTo(500, 450);
context.lineTo(100, 450);

context.strokeStyle = "blue";
// 绘制
context.stroke();
*/
