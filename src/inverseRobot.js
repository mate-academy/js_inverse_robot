'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const UniqueValues = new Set();
  const Values = Object.values(robot);

  Values.forEach((elem) => {
    UniqueValues.add(elem);
  });

  if (UniqueValues.size !== Values.length) {
    return null;
  }

  for (const property in robot) {
    newRobot[robot[property]] = property;
  }

  return newRobot;
}

module.exports = inverseRobot;
