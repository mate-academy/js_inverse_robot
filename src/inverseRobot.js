'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInv = {};

  for (const key in robot) {
    // перевіряємо на дублювання властивостей в об'єкті
    if (robotInv.hasOwnProperty(robot[key])) {
      return null;
    }
    // додаємо в об'єкт властивість як ключ і ключ як властивість
    robotInv[robot[key]] = key;
  }

  return robotInv;
}

module.exports = inverseRobot;
