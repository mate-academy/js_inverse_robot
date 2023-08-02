'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

// const objLength = (obj) => {
//   return Object.keys(obj).length;
// };

function inverseRobot(robot) {
  const naturalRobot = {};

  for (const key in robot) {
    if (robot[key] in naturalRobot) {
      return null;
    }

    naturalRobot[robot[key]] = key;
  }

  return naturalRobot;
}

module.exports = inverseRobot;
