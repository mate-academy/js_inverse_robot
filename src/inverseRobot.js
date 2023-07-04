'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const values = Object.values(robot);
  const arr = [];

  for (let i = 0; i < values.length; i++) {
    if (arr.indexOf(values[i]) === -1) {
      arr.push(values[i]);
    }
  }

  if (values.length !== arr.length) {
    return null;
  }

  const newObject = {};

  for (let i = 0; i < robot.length; i++) {
    if (newObject.indexOf(robot[i]) !== -1) {
      return null;
    }
  }

  Object.entries(robot).forEach(entry => {
    const key = entry[0];
    const value = entry[1];

    newObject[value] = key;
  });

  return newObject;
}

module.exports = inverseRobot;
