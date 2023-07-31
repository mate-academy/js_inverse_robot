'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

const objLength = (obj) => {
  return Object.keys(obj).length;
};

function inverseRobot(robot) {
  const naturalRobot = {};

  for (const key in robot) {
    naturalRobot[robot[key]] = key;
  }

  return objLength(naturalRobot) === objLength(robot) ? naturalRobot : null;
}

module.exports = inverseRobot;
