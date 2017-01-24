'use strict';

window.renderStatistics = function (ctx, names, times) {
// черный прямоугольник
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
// белый поверх него
  ctx.fillStyle = '#fff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
// оформление текста
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Слава победителю!', 150, 20);
  ctx.fillText('Вот результаты:', 150, 40);

  var max = -1;
// цикл который найдет текущее максимальное значение из массива
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
// гистограмма с параметрами столбиков
  var histoHeight = 150;
  var histoTopOffset = 70;
  var columnWidth = 40;
  var dropWidth = 50;
  var step = histoHeight / max;
  // цикл для рисования столбиков по именам игроков и времени
  for (i = 0; i < times.length; i++) {
    var name = names[i];
    var height = step * time;
    var histoY = histoHeight - height + histoTopOffset;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(histoHeight + dropWidth * i, histoY, columnWidth, height);
    } else {
// функция, случайным образом генерирует оттенки синего
      ctx.fillStyle = 'rgb(0,' + '0' + ',' + (Math.random() * 255).toFixed(0) + ')';
      ctx.fillRect(histoHeight + dropWidth * i, histoY, columnWidth, height);
    }
// выводит имена участников и время
    ctx.fillStyle = '#000';
    ctx.fillText(name + ':', histoHeight + dropWidth * i, histoY + height + 10);
    ctx.fillText(time.toFixed(0) + ' ', histoHeight + dropWidth * i, histoY + height + 30);
  }
};
