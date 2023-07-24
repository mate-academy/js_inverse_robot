'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  function checkForRepetition(object) {
    const objectValues = Object.values(object);
    const setOfValues = new Set(objectValues);

    return Array.from(setOfValues).length === objectValues.length;
  }

  if (!checkForRepetition(robot)) {
    return null;
  }

  const newRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      newRobot[robot[key]] = key;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
