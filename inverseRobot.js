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
  const newRobot = {};
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  if (keys.length === 0) {
    return null;
  }

  if (keys.length === 1) {
    newRobot[values] = keys;

    return newRobot;
  }

  if (checkRepeat(keys) === false) {
    return null;
  }

  if (checkRepeat(values) === false) {
    return null;
  }

  for (let i = 0; i < keys.length; i++) {
    newRobot[values[i]] = keys[i];
  }

  return newRobot;

  function checkRepeat(ar) {
    const newAr = ar;

    while (newAr.length > 1) {
      const lengthNewAr = newAr.length;

      for (let i = lengthNewAr - 2; i < lengthNewAr; i -= 1) {
        if (newAr[lengthNewAr - 1] === newAr[i]) {
          return false;
        }
      }

      newAr.pop(newAr[lengthNewAr - 1]);
    }

    return true;
  }
}

module.exports = inverseRobot;
