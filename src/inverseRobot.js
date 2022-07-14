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
  // create new emty object for result
  const correctRobot = {};

  // create a cycle for each property in robot
  // and check if we've already add to correctRobot this property
  // then return null else add correct key values
  // for new correctRobot Object and then return it
  for (const prop in robot) {
    if (!correctRobot.hasOwnProperty(robot[prop])) {
      correctRobot[robot[prop]] = prop;
    } else {
      return null;
    }
  }

  return correctRobot;
}

module.exports = inverseRobot;
