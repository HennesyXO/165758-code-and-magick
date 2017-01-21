 'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
}

var canvas = document.querySelector('canvas');

window.renderStatistics(
  canvas.getContext('2d');
  ['Вы', 'Игорь', 'Миша', 'Петр', 'Коля'];
  [20, 30, 40, 50, 60];
  )


//     ctx.textBaseline = 'hanging';
//     ctx.fillText('Ура вы победили!', 20, 10);
//     ctx.fillText('Список результатов:', 20, 48);
//     ctx.font('16px PT Mono');
