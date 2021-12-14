'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy, when
 * the organs are located in a mirror image.
 * Something similar happened to our robot Kolli. His keys became entries,
 * and entries became keys. Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter and returns a new object in which
 * keys will change places with entries.
 *
 * If any of the object entries are repeated, return 'null'.
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
  const robotInverse = {};
  const entries = Object.entries(robot);

  for (let n = 0; n < entries.length; n++) {
    for (let i = n + 1; i < entries.length; i++) {
      if (entries[n][1] === entries[i][1]) {
        return null;
      }
    }

    robotInverse[entries[n][1]] = entries[n][0];
  }

  return robotInverse;
}

module.exports = inverseRobot;
