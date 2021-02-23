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
  const arrValues = Object.values(robot);
  let counter = 0;

  for (let i = 0; i < arrValues.length; i++) {
    const value = arrValues.filter(item => item === arrValues[i]);

    if (value.length > 1) {
      counter++;
    }
  }

  const fixedRobot = {};

  for (const key in robot) {
    fixedRobot[robot[key]] = key;
  }

  if (counter > 0) {
    return null;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
