'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverted = {};
  const robotvalues = Object.values(robot);
  let i = 0;

  for (i; i < robotvalues.length; i++) {
    if (robotvalues[i] === robotvalues[i + 1]) {
      return null;
    } else {
      continue;
    }
  }

  for (const [key, value] of Object.entries(robot)) {
    inverted[`${value}`] = `${key}`;
  }

  return inverted;
}

module.exports = inverseRobot;

// синтаксис for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }
