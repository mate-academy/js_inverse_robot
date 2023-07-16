'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // Масив з усіма ключами робота
  const robotKeys = Object.keys(robot);
  // Масив з усіма значеннями ключів робота
  const robotValues = Object.values(robot);
  // Новий об'єкт для повернення
  const repairedRobot = {};

  // Перебір всіх індексів масиву зі значеннями
  for (let i = 0; i < robotValues.length; i++) {
    // Підстановка в масив -
    // ключів зі значень 'хворого' робота та значень із ключів.
    repairedRobot[robotValues[i]] = robotKeys[i];

    // Перебір всіх індексів масиву після "i"
    for (let j = i + 1; j < robotValues.length; j++) {
      // Якщо якісь елементи масиву '===' то повертаю null
      if (robotValues[i] === robotValues[j]) {
        return null;
      }
    }
  }

  return repairedRobot;
}

module.exports = inverseRobot;
