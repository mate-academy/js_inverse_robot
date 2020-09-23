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
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  const lengthValues = values.length;
  const lengthUniqValues = (new Set(values)).size;

  if (lengthValues !== lengthUniqValues) {
    return null;
  }

  for (let i = 0; i < lengthValues; i++) {
    robot[values[i]] = keys[i];
    delete robot[keys[i]];
  }

  return robot;
}

module.exports = inverseRobot;
