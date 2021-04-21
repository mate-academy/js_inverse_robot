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
  const reverseRobot = {};
  const robotValues = Object.values(robot);
  let count = 0;
  let wordRepeat = 0;

  while (count < robotValues.length) {
    const value = robotValues[count];

    for (let i = 0; i < robotValues.length; i++) {
      if (value === robotValues[i]) {
        wordRepeat++;
      }
    }
    count++;

    if (wordRepeat >= 2) {
      return null;
    }
    wordRepeat = 0;
  }

  for (const key in robot) {
    reverseRobot[robot[key]] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
