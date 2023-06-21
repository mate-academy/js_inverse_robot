'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);

  if (values.length !== new Set(values).size) {
    return null;
  }

  const resultObj = {};
  const params = Object.entries(robot);

  params.forEach(([key, value]) => {
    resultObj[value] = key;
  });

  return resultObj;
}

module.exports = inverseRobot;
