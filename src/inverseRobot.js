'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normRobot = {}; // Declaring new object
  const value = []; // Assign an array which will save all future keys

  // Checking each element of object, if we already have
  // the key with that name we brake our function and
  // will return 'null'
  // Else we change places with values
  for (const key in robot) {
    if (value.includes(robot[key])) {
      return null;
    } else {
      value.push(robot[key]);
    }

    normRobot[robot[key]] = key;
  }

  // Return an object with replaced keys with values
  return normRobot;
}

module.exports = inverseRobot;
