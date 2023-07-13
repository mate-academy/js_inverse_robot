'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const properties = Object.values(robot);
  const values = Object.keys(robot);

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    const value = values[i];

    if (result[property] === undefined) {
      result[property] = value;
    } else {
      return null;
    }
  }

  return result;
}

module.exports = inverseRobot;
