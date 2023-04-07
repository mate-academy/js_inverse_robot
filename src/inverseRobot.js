'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};
  const robotValues = Object.values(robot);

  const isSameValue = robotValues.some((item) => {
    return robotValues.indexOf(item) !== robotValues.lastIndexOf(item);
  });

  if (isSameValue) {
    return null;
  }

  for (const [key, value] of Object.entries(robot)) {
    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
