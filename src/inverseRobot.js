'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const INVERTED_ROBOT_ENTRIES_ARR = Object.entries(robot);
  const NORMALIZED_ROBOT_OBJECT = {};

  for (let i = 0; i < INVERTED_ROBOT_ENTRIES_ARR.length; i++) {
    const el = INVERTED_ROBOT_ENTRIES_ARR[i];
    const INVERTED_ROBOT_VALUE = el[1];

    for (let a = i + 1; a < INVERTED_ROBOT_ENTRIES_ARR.length; a++) {
      const elNext = INVERTED_ROBOT_ENTRIES_ARR[a];
      const INVERTED_ROBOT_VALUE_NEXT = elNext[1];

      if (INVERTED_ROBOT_VALUE === INVERTED_ROBOT_VALUE_NEXT) {
        return null;
      }
    }
  }

  for (let b = 0; b < INVERTED_ROBOT_ENTRIES_ARR.length; b++) {
    const elInWork = INVERTED_ROBOT_ENTRIES_ARR[b];

    NORMALIZED_ROBOT_OBJECT[elInWork[1]] = elInWork[0];
  }

  return NORMALIZED_ROBOT_OBJECT;
}

module.exports = inverseRobot;
