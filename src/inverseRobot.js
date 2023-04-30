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

  for (const key in robotKeys) {
    let checkRobotKeys = [...robotKeys];

    checkRobotKeys = checkRobotKeys.filter(num => num !== robotKeys[key]);

    if ((robotKeys.length - checkRobotKeys.length > 1)) {
      return null;
    };
  };

  for (const i in robotKeys) {
    inversedRobot[robotKeys[i]] = robotValues[i];
  }

  return inversedRobot;
}

module.exports = inverseRobot;
