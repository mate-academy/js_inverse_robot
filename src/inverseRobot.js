'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  const objectValues = Object.values(robot);

  for (let i = 0; i < objectValues.length; i++) {
    const firstIndex = objectValues.indexOf(objectValues[i]);
    const lastIndex = objectValues.lastIndexOf(objectValues[i]);

    if (firstIndex !== lastIndex) {
      return null;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
