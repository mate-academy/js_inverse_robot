'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightParametr = {
  };

  for (const key in robot) {
    if (rightParametr.hasOwnProperty([robot[key]])) {
      return null;
    }

    rightParametr[robot[key]] = key;
  }

  return rightParametr;
}

module.exports = inverseRobot;
