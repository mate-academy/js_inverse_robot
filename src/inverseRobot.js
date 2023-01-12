'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newRobot = {};
  const entries = Object.entries(robot);

  for (const entry of entries) {
    const obj = {};
    const key = entry[1];

    obj[key] = entry[0];

    const newRobotKeys = Object.keys(newRobot);

    for (const newRobotKey of newRobotKeys) {
      if (key === newRobotKey) {
        return null;
      };
    }

    newRobot = Object.assign(newRobot, obj);
  }

  return newRobot;
}

module.exports = inverseRobot;
