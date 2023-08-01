'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};
  // const valuesRoobot = Object.values(robot);

  // for (let i = 0; i < valuesRoobot.length; i++) {
  //   if (valuesRoobot.slice(i + 1).includes(valuesRoobot[i])) {
  //     return null;
  //   }
  // }

  for (const key in robot) {
    if (reversedRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    reversedRobot[robot[key]] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
