'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};
  const arrKeys = [];
  let repeat = false;

  for (const key in robot) {
    arrKeys.push(robot[key]);
  }

  for (let i = 0; i < arrKeys.length; i++) {
    for (let j = i + 1; j < arrKeys.length; j++) {
      if (arrKeys[i] === arrKeys[j]) {
        repeat = true;
      }
    }
  }

  if (repeat === false) {
    for (const key in robot) {
      inversedRobot[robot[key]] = key;
    }

    return (inversedRobot);
  } else {
    return (null);
  }
}

module.exports = inverseRobot;
