 'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.textBaseline = 'hanging';
  ctx.font('16px PT Mono');
  ctx.fillText('Слава победителю!', 20, 10);
  ctx.fillText('Вот результаты:', 20, 48);
}
//===============================================
var max = -1; //Почему?

for (var i = 0; i < times.length; i++ ) {
  var time = times[i];//что здесь происходит?
  if (time > max) {
    max = time;
  }
}
//===============================================

var histoHeight = 150;
var columnWidth = 40;
var dropWidth = 50;
var step = histoHeight / max;//что здесь происходит?

for (var i = 0; i < times.length; i++) {
  var name = names[i];
  var time = times[i];
  var height = step * time;

  ctx.fillRect(histoHeight + dropWidth * i, 80, columnWidth, height);//а здесь?

  if (name[0]) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    //функция, случайным образом генерирует оттенки синего
    ctx.fillStyle = function draw() {

      for (var i = 0; i < 6; i++){
      // тут ошибка?
        ctx.fillStyle = 'rgb(0,' + '0' + ',' + Math.floor(255-42.5*i) + ')';
      }
    }
}

    }
  }

  ctx.fillText = (name + ':' + time.toFixed(0), histoHeight + dropWidth * i, 80 + histoHeight +20);
}


var canvas = document.querySelector('canvas');

window.renderStatistics(
  canvas.getContext('2d');
  ['Вы', 'Игорь', 'Миша', 'Петр', 'Коля'];
  [20, 30, 40, 50, 60];
  )
