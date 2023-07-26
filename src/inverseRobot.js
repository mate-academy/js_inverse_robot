'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

// function inverseRobot(robot) {
//   const inverseObj = {};

//   for (const key in robot) {
//     const value = robot[key];

//     if (inverseObj[value] !== undefined) {
//       return null;
//     }

//     inverseObj[value] = key;
//   }

//   return inverseObj;
// }

function inverseRobot(robot) {
  const inverseObj = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverseObj.hasOwnProperty(value)) {
      return null;
    }

    inverseObj[value] = key;
  }

  return inverseObj;
}

module.exports = inverseRobot;
