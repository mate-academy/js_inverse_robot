'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const transponsedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    transponsedRobot[value] = key;
  }

  if (Object.keys(robot).length !== Object.keys(transponsedRobot).length) {
    return null;
  }

  return transponsedRobot;
}

module.exports = inverseRobot;
