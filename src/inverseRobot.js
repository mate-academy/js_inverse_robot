'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  let isNull = 0;

  Object.entries(robot).forEach(pair => {
    if (!newRobot[pair[1]]) {
      newRobot[pair[1]] = pair[0];
    } else {
      isNull = 1;
    }
  });

  if (isNull === 1) {
    return null;
  };

  return newRobot;
}

module.exports = inverseRobot;
