'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  const robotFinal = {};
  const robotCount = {};
  const robotValues = Object.values(robot);

  for (const value of robotValues) {
    if (!robotCount[value]) {
      robotCount[value] = 1;
    } else {
      robotCount[value] += 1;
    }
  }

  const robotAfterValues = Object.values(robotCount).some((num) => num > 1);

  if (robotAfterValues) {
    return null;
  }

  Object.entries(robot).forEach(([key, value]) => {
    robotFinal[value] = key;
  });

  return robotFinal;
}

module.exports = inverseRobot;
