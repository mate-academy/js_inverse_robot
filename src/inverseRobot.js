'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const setOfUniqueValues = new Set();
  const arrayOfValues = Object.values(robot);

  arrayOfValues.forEach((elem) => {
    setOfUniqueValues.add(elem);
  });

  if (setOfUniqueValues.size !== arrayOfValues.length) {
    return null;
  }

  for (const property in robot) {
    newRobot[robot[property]] = property;
  }

  return newRobot;
}

module.exports = inverseRobot;
