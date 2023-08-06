'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {}; // Declared a variable.

  for (const [key, value] of Object.entries(robot)) {
    if (reversedRobot.hasOwnProperty(value)) {
      //  Checking if the object has the key.
      //   if the object already has the key return null.
      return null;
    }

    reversedRobot[value] = key; // Reverse the object.
  }

  return reversedRobot; // Return the reversed object.
}

module.exports = inverseRobot;
