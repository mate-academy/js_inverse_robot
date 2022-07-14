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
  // get array of robot values
  const robotValues = Object.values(robot);
  // create new emty object for result
  const correctRobot = {};

  // searching the same values in values array, if founded then return null
  for (let i = 0; i < robotValues.length; i++) {
    const curValue = robotValues[i];

    for (let j = i + 1; j < robotValues.length; j++) {
      if (curValue === robotValues[j]) {
        return null;
      }
    }
  }

  // checking for the no prototype properties and then add correct key values
  // for new correctRobot Object and then return it
  for (const prop in robot) {
    if (robot.hasOwnProperty(prop)) {
      correctRobot[robot[prop]] = prop;
    }
  }

  // console.log(correctRobot);
  return correctRobot;
}

module.exports = inverseRobot;
