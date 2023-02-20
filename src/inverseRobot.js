'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const TRUE_KEYS = Object.values(robot);
  const TRUE_VALUES = Object.keys(robot);
  const OBJ = {};

  for (let i = 1; i < TRUE_KEYS.length; i++) {
    let FIRST_KEY = 0;

    if (TRUE_KEYS[FIRST_KEY] === TRUE_KEYS[i]) {
      return null;
    }

    FIRST_KEY++;
  }

  for (let y = 0; y < TRUE_KEYS.length; y++) {
    OBJ[TRUE_KEYS[y]] = TRUE_VALUES[y];
  }

  return OBJ;
}

module.exports = inverseRobot;
