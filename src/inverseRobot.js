'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function findDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) !== index);
};

function inverseRobot(robot) {
  const robotValues = Object.values(robot);

  const duplicateValues = findDuplicates(robotValues);

  if (duplicateValues.length) {
    return null;
  }

  return Object.fromEntries(
    Object
      .entries(robot)
      .map(([key, value]) => [value, key])
  );
}

module.exports = inverseRobot;
