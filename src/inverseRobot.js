'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy, when
 * the organs are located in a mirror image.
 * Something similar happened to our robot Kolli. His keys became values,
 * and values became keys. Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter and returns a new object in which
 * keys will change places with values.
 *
 * If any of the object values are repeated, return 'null'.
 *
 * Example:
 *
 * const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 * const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 * inverseRobot(robert) === null
 * inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
 *
 *
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  // write code here

  const result = {};

  for (const key in robot) {
    const value = robot[key];

    if (result.hasOwnProperty(value)) {
      return null;
    } else {
      result[value] = key;
    }
  }

  return result;
}

module.exports = inverseRobot;

// просто один цикл і Object.hasOwnProperty

// eslint-disable-next-line max-len
// const res = Object.fromEntries(Object.entries(robot).map(([key, value]) => [value, key]));
//  return Object.keys(res).length < Object.values(robot).length ? null : res;

// eslint-disable-next-line max-len
// const result = {}; // порожній об'єкт, щоб містити зворотні пари ключ/значення

// // const keys = Object.keys(robot); // отримати всі ключі в масиві
// for (const key in robot) {
//   const value = robot[key]; // отримуємо значення для поточного ключа

//   if (result.hasOwnProperty(value)) {
//     result[value] = key; // ключі міняються місцями з властивостями
//   } else {
//     return null;
//   }
// }

// return result;
