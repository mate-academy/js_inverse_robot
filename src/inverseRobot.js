'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  const robotKeys = Object.values(robot);
  const countObj = {};

  for (let i = 0; i < robotKeys.length; i++) {
    const elem = robotKeys[i];

    if (!countObj[elem]) {
      countObj[elem] = 1;
    } else {
      countObj[elem] += 1;
    }
  }

  const robotValues = Object.values(countObj).some((num) => num > 1);

  if (robotValues) {
    return null;
  }

  const invertObj = Object.fromEntries(
    Object.entries(robot)
      .reverse()
      .map((item) => item.reverse())
  );

  return invertObj;
}

module.exports = inverseRobot;
