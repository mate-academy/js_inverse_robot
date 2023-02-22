'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const NewRobot = {};

  for (const key in robot) {
    NewRobot[robot[key]] = key;
  }

  if (Object.keys(NewRobot).length !== Object.values(robot).length) {
    return null;
  }

  return NewRobot;
}

module.exports = inverseRobot;
