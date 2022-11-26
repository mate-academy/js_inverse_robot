'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keyName = Object.values(robot);
  const values = Object.keys(robot);
  const inverseRoboto = {};

  for (let i = 0; i < keyName.length; i++) {
    for (let j = 0; j < keyName.length; j++) {
      if (j !== i) {
        if (keyName[i] === keyName[j]) {
          return null;
        }
      }
    }
  }

  keyName.forEach((key, value) => {
    inverseRoboto[key] = values[value];
  });

  return inverseRoboto;
}

module.exports = inverseRobot;
