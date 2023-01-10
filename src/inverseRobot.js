'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let reverseRobot = {};
  const keys = Object.values(robot);

  for (let i = 1; i < keys.length; i++) {
    let matches = keys[0];

    if (keys[i] === matches) {
      reverseRobot = null;
    } else {
      matches = keys[i];
    };

    for (const char in robot) {
      if (reverseRobot !== null) {
        reverseRobot[robot[char]] = char;
      }
    }
  }

  return reverseRobot;
}

module.exports = inverseRobot;
