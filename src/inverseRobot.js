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
  if (!robot) {
    return {};
  }

  const keys = Object.keys(robot).reverse();
  const values = Object.values(robot).reverse();
  const tem = {};

  for (let i = 0; i < values.length; i++) {
    let count = 0;

    for (let j = i; j < values.length; j++) {
      if (values[j] === values[i]) {
        count++;
      }

      if (count > 1) {
        return null;
      }
    }
  }

  for (let i = 0; i < keys.length; i++) {
    let count1 = 0;

    for (let j = i; j < keys.length - i; j++) {
      if (keys[j] === keys[i]) {
        count1++;
      }
    }

    if (count1 > 1) {
      return null;
    }
  }

  if (keys.length !== values.length) {
    return null;
  }

  for (let i = 0; i < keys.length; i++) {
    tem[values[i]] = keys[i];
  }

  return tem;
}

module.exports = inverseRobot;
