'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = Object.keys(robot).reduce((obj, key) => {
    obj[robot[key]] = key;

    return obj;
  }, {});

  const inLength = Object.keys(robot).length;
  const outLength = Object.keys(reversedRobot).length;

  return inLength === outLength ? reversedRobot : null;
}

module.exports = inverseRobot;
