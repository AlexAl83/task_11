let minValue = parseInt(prompt('Минимальное знание числа для игры не меньше -999', '-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры не более 999', '999'));
min = minValue;
max = maxValue;

min < -999 ? (min = -999) : (min = minValue);
max > 999 ? (max = 999) : (max = maxValue);
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
  let minValue = parseInt(prompt('Минимальное знание числа для игры не меньше -999', '-999'));
  let maxValue = parseInt(prompt('Максимальное знание числа для игры не более 999', '999'));
  alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
  orderNumber = 1;
  answerNumber = Math.floor((minValue + maxValue) / 2);
  orderNumberField.innerText = orderNumber;
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
  gameRun = true;
});

document.getElementById('btnOver').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random() * 3);
      if (phraseRandom == 0) {
        answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
      } else if (phraseRandom == 1) {
        answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
      } else if (phraseRandom == 2) {
        answerPhrase = `Меня не проведешь!`;
      } else {
        answerPhrase = `Твоя взяла!\n\u{1F92A}`;
      }
      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseRandom = Math.round(Math.random() * 3);
      if (phraseRandom == 0) {
        answerPhrase = `Может быть`;
      } else if (phraseRandom == 1) {
        answerPhrase = `Неужели`;
      } else if (phraseRandom == 2) {
        answerPhrase = `Как насчет`;
      } else {
        answerPhrase = `Это точно`;
      }
      answerField.innerText = answerPhrase + ` ${answerNumber}?`;
    }
  }
});

document.getElementById('btnLess').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random() * 3);
      if (phraseRandom == 0) {
        answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
      } else if (phraseRandom == 1) {
        answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
      } else if (phraseRandom == 2) {
        answerPhrase = `Меня не проведешь!\n\u{1F644}`;
      } else {
        answerPhrase = `Твоя взяла!\n\u{1F92A}`;
      }

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.ceil((maxValue + minValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseRandom = Math.round(Math.random() * 3);
      if (phraseRandom == 0) {
        answerPhrase = `Может быть`;
      } else if (phraseRandom == 1) {
        answerPhrase = `Неужели`;
      } else if (phraseRandom == 2) {
        answerPhrase = `Как насчет`;
      } else {
        answerPhrase = `Это точно`;
      }
      answerField.innerText = answerPhrase + ` ${answerNumber}?`;
    }
  }
});
document.getElementById('btnEqual').addEventListener('click', function () {
  if (gameRun) {
    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
    gameRun = false;
  }
});
