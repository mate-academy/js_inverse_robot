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
  const values = Object.values(robot);
  const keys = Object.keys(robot);
  const uniqueValues = unique(values);
  const uniqueKeys = unique(keys);

  if (values.length !== uniqueValues.length) {
    return null;
  } else if (keys.length !== uniqueKeys.length) {
    return null;
  }

  const reversRobot = {};

  for (const char in robot) {
    reversRobot[robot[char]] = char;
  }

  return reversRobot;
}

function unique(arr) {
  return Array.from(new Set(arr));
}

module.exports = inverseRobot;
