'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const targetRobot = {};
  const properties = Object.entries(robot);

  for (const property of properties) {
    if (targetRobot.hasOwnProperty(property[1])) {
      return null;
    };

    targetRobot[property[1]] = property[0];
  };

  return targetRobot;
}

module.exports = inverseRobot;
