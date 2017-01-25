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
  ctx.fillText('Слава победителю!', 240, 20);
  ctx.fillText('Кто молодец? Вы молодец!', 200, 40);

  var max = -1;
// цикл который найдет текущее максимальное значение из массива
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
// гистограмма с параметрами столбиков
  var histoHeight = 150;// высота области ниже текста
  var leftOffset = 150;
  var histoTopOffset = 90;// отступ сверху
  var columnWidth = 40;// ширина колонки
  var dropWidth = 50;// просветы меж колонками
  var step = histoHeight / max; // цена деления
  // цикл для рисования столбиков по именам игроков и времени
  for (i = 0; i < times.length; i++) {
    var name = names[i];
    var seconds = times[i];
    var columnHeight = step * seconds;
    var histoX = leftOffset + ((columnWidth + dropWidth) * i);
    var histoY = histoHeight - columnHeight + histoTopOffset;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
// функция, случайным образом генерирует оттенки синего
      ctx.fillStyle = 'rgb(0,' + '0' + ',' + (Math.random() * 255).toFixed(0) + ')';
    }

    ctx.fillRect(histoX, histoY, columnWidth, columnHeight);

    // выводит имена участников и время
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(name + ' ', histoX, histoY + columnHeight + 10);
    ctx.fillText(seconds.toFixed(0) + ' ', histoX, histoY - 20);
  }
};
