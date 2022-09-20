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
  const res = Object.fromEntries(Object.entries(robot).map(([key, value]) =>
    [value, key]));

  if (Object.keys(res).length < Object.values(robot).length) {
    return null;
  }

  const arrKeys = [];

  for (const key in robot) {
    arrKeys.push(key);
  }

  const arrValues = [];

  for (const key in robot) {
    arrValues.push(robot[key]);
  };

  const newUser = {};

  for (let i = 0; i < arrKeys.length; i++) {
    newUser[arrValues[i]] = arrKeys[i];
  }

  return newUser;
}

module.exports = inverseRobot;
