'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = checkRepeat(Object.values(robot));

  if (newObj === null) {
    return null;
  }

  for (const key in robot) {
    newObj[robot[key]] = key;
  }

  return newObj;
}

function checkRepeat(values) {
  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i];

    for (let j = i + 1; j < values.length; j++) {
      if (currentValue === values[j]) {
        return null;
      }
    }
  }

  return {};
};
module.exports = inverseRobot;
