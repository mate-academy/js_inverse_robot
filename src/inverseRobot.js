'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const properties = Object.values(robot);
  const values = Object.keys(robot);

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    const value = values[i];

    if (!newRobot.hasOwnProperty(property)) {
      newRobot[property] = value;
    } else {
      return null;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
