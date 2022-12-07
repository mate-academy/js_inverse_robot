'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const objArr = Object.entries(robot);
  const reverseArr = [];
  const values = Object.values(robot);
  const isDuplicate = values.some((item, index) =>
    index !== values.indexOf(item)
  );

  if (!isDuplicate) {
    for (let i = 0; i < objArr.length; i++) {
      const reverse = objArr[i].reverse();

      reverseArr.push(reverse);
    }

    return Object.fromEntries(reverseArr);
  } else {
    return null;
  }
}

module.exports = inverseRobot;
