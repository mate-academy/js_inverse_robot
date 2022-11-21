'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const valuesUnique = [...new Set(values)];

  if (values.length !== valuesUnique.length) {
    return null;
  }

  const keys = Object.keys(robot);
  const newRobot = {};

  keys.forEach(key => {
    newRobot[robot[key]] = key;
  });

  return newRobot;
}

module.exports = inverseRobot;
