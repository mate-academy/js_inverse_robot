'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

// const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
// const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
// inverseRobot(robert) === null
// inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }

function inverseRobot(robot) {
  const invRobot = {};

  for (const key in robot) {
    if (invRobot[robot[key]]) {
      return null;
    } else {
      invRobot[robot[key]] = key;
    }
  }

  return invRobot;
}

module.exports = inverseRobot;
