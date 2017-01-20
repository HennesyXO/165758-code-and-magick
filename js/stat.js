var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var names = ['Вы', 'Игорь', 'Миша', 'Петр', 'Коля'];
var times = [20, 30, 40, 50, 60];

function renderStatistics(ctx, names, times) {
  // body...
}

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillText('Ура вы победили!');
  ctx.fillText('Список результатов:');
  ctx.font('16px PT Mono');
