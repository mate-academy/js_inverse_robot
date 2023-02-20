'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const TRUE_KEYS = [];
  const OBJ = {};

  for (const [key, value] of Object.entries(robot)) {
    OBJ[value] = key;
    TRUE_KEYS.push(value);

    for (let i = 1; i < TRUE_KEYS.length; i++) {
      let FIRST_KEY = 0;

      if (TRUE_KEYS[FIRST_KEY] === TRUE_KEYS[i]) {
        return null;
      }

      FIRST_KEY++;
    }
  }

  return OBJ;
}

module.exports = inverseRobot;
