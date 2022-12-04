'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let reversRobot = { ...robot };
  const robotKey = Object.keys(robot);
  const robotValues = Object.values(robot);

  for (const key of robotKey) {
    reversRobot[robot[key]] = key;
    delete reversRobot[key];

    if (robotValues.indexOf(robot[key])
    !== robotValues.lastIndexOf(robot[key])) {
      reversRobot = null;
      break;
    }
  }

  return reversRobot;
}

module.exports = inverseRobot;
