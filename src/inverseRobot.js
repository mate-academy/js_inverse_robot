'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newObj = {};

  const entries = Object.entries(robot);

  for (let i = 0; i < entries.length; i++) {
    const values = entries[i][0];
    const keys = entries[i][1];

    newObj[keys] = values;
  }

  const newEntries = Object.entries(newObj);

  if (newEntries.length !== entries.length) {
    return null;
  }

  return newObj;
}

module.exports = inverseRobot;
