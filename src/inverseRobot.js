'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrOfKeys = Object.keys(robot);
  const arrOfValues = Object.values(robot);

  for (let x = 0; x < arrOfKeys.length; x++) {
    if (
      arrOfKeys.indexOf(arrOfKeys[x])
      !== arrOfKeys.lastIndexOf(arrOfKeys[x])
    ) {
      return null;
    }
  }

  for (let x = 0; x < arrOfValues.length; x++) {
    if (
      arrOfValues.indexOf(arrOfValues[x])
      !== arrOfValues.lastIndexOf(arrOfValues[x])) {
      return null;
    }
  }

  const revers = {};

  for (let i = 0; i < arrOfKeys.length; i++) {
    revers[arrOfValues[i]] = arrOfKeys[i];
  }

  return revers;
}

module.exports = inverseRobot;
