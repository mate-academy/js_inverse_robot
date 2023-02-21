'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const TRUE_KEYS = [];
  const OBJ = {};

  for (const key in robot) {
    OBJ[robot[key]] = key;
    TRUE_KEYS.push(robot[key]);

    for (let y = 0; y < TRUE_KEYS.length; y++) {
      for (let i = y + 1; i < TRUE_KEYS.length + 1; i++) {
        if (TRUE_KEYS[y] === TRUE_KEYS[i]) {
          return null;
        }
      }
    }
  }

  return OBJ;
}

module.exports = inverseRobot;
