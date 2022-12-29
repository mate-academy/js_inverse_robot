'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverso = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (robotInverso.hasOwnProperty(robotKey)) {
      return null;
    }

    robotInverso[robot[key]] = key;
  }

  return robotInverso;

  // const keysFrom = Object.entries(robot); array dall'oggetto

  // for (let i = 0; i < keysFrom.length; i++) {
  //   keysFrom[i].reverse(keysFrom);
  // } per invertire ogni array dentro il nuovo array keysfrom

  // const newObject = Object.fromEntries(keysFrom);
  // riconvertire tutto in oggetto

  // return newObject;
}

module.exports = inverseRobot;
