'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseObj = {};

  for (const key in robot) {
    if (reverseObj[robot[key]]) {
      return null;
    };

    reverseObj[robot[key]] = key;
  };

  return reverseObj;
};

module.exports = inverseRobot;
