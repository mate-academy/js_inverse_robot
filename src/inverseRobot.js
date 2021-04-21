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
  const arrayOfRobotsValues = Object.values(robot);

  const uniqueOfRobotsValues = new Set(arrayOfRobotsValues);
  const inversedRobot = {};

  if (arrayOfRobotsValues.length > uniqueOfRobotsValues.size) {
    return null;
  }

  for (const robotPart in robot) {
    inversedRobot[robot[robotPart]] = robotPart;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
