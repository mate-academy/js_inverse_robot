'use strict';

/*
 * @param {object} robot
 *Створіть функцію «inverseRobot»,
  яка приймає «robot» як параметр і
  повертає новий об’єкт, у якому ключі
   змінюватимуться місцями зі значеннями.
 * @return {object}
*/

function inverseRobot(robot) {
  const copyRobot = {};

  for (const key in robot) {
    if (robot[key] in copyRobot) {
      return null;
    }
    copyRobot[robot[key]] = key;
  }

  return copyRobot;
}

module.exports = inverseRobot;
