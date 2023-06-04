'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const ROBOT_VALUES = Object.values(robot);

  function findDuplicates(arry) {
    return arry.filter((item, index) => arry.indexOf(item) !== index);
  };

  const DUP_VALUES = findDuplicates(ROBOT_VALUES);

  if (DUP_VALUES.length >= 1) {
    return null;
  }

  return Object.fromEntries(
    Object
      .entries(robot)
      .map(([key, value]) => [value, key])
  );
}

module.exports = inverseRobot;
