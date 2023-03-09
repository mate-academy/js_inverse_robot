'use strict';

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (robot.hasOwnProperty('name') && robot.name !== 'name') {
      inversedRobot[robot.name] = 'name';
    }

    if (key !== 'name') {
      if (inversedRobot.hasOwnProperty(value)) {
        return null;
      }
    }

    inversedRobot[value] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
