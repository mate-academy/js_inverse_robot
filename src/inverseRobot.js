'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};
  const arrayKeys = Object.values(robot);
  const arrayValues = Object.keys(robot);

  if (arrayKeys.some((e, i, arr) => arr.indexOf(e) !== i)) {
    return null;
  } else {
    for (let i = 0; i < arrayKeys.length; i++) {
      const keyNew = arrayKeys[i];
      const valueNew = arrayValues[i];

      newObj[keyNew] = valueNew;
    }

    return newObj;
  }
}

module.exports = inverseRobot;
