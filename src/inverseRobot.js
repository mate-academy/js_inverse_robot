'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.values(robot);
  const robotValues = Object.keys(robot);
  const inversedRobot = {};

  for (let i = 0; i < robotKeys.length; i++) {
    for (let j = i + 1; j < robotKeys.length; j++) {
      if (robotKeys[i] === robotKeys[j]) {
        return null;
      }
    }
  }

  for (const i in robotKeys) {
    inversedRobot[robotKeys[i]] = robotValues[i];
  }

  return inversedRobot;
}

module.exports = inverseRobot;

// Transposition of internal organs is a variant of internal anatomy
// when the organs are located in a mirror image.
// Something similar happened to our robot Kolli.
// His keys became values, and values became keys. Help to repair the robot.

// Create a 'inverseRobot' function that takes 'robot' a parameter and
// returns a new object in which keys will change places with values.

// If any of the object values are repeated, return 'null'.

// Example:

//  const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
//  const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
//  inverseRobot(robert) === null
//  inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
