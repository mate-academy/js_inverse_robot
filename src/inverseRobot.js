'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy,
 * when the organs are located in a mirror image.
 * Something similar happened to our robot Kolli.
 * His characters became values, and values became characters.
 * Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter
 * and returns a new object in which characters will change places with values.
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

  for (const character in robot) {
    if (robot[character] in newRobot === true) {
      return null;
    }

    newRobot[robot[character]] = character;
  }

  return newRobot;
}

module.exports = inverseRobot;
