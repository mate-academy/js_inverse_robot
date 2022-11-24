'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const postOpRobot = {};

  for (const key in robot) {
    if (robot[key] in postOpRobot) {
      return null;
    }
    postOpRobot[robot[key]] = key;
  }

  return postOpRobot;
};

module.exports = inverseRobot;
