'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const keys = Object.values(robot);
  const duplicateElements = keys.filter(
    (item, index) => keys.indexOf(item) !== index
  );

  if (duplicateElements.length > 0) {
    return null;
  }

  const inversedRobot = {};

  Object.keys(robot).forEach((value, index) => {
    inversedRobot[keys[index]] = value;
  });

  return inversedRobot;
}

module.exports = inverseRobot;
