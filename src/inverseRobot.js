'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const getRobot = {};
  const arrRobot = Object.values(robot);

  for (let i = 0; i < arrRobot.length; i++) {
    if (arrRobot[i] === arrRobot[i + 1] || arrRobot[i + 5]) {
      return null;
    }
  }

  for (const i in robot) {
    const value = i;
    const key = robot[i];

    getRobot[key] = value;
  };

  return getRobot;
}

// inverseRobot({
//   Kolli: 'name', 123: 'chipVer', 3: 'wheels',
// });
module.exports = inverseRobot;
