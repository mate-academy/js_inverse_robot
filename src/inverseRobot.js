'use strict';

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const value in robot) {
    const valuesForTheRobot = robot[value];

    if (inversedRobot.hasOwnProperty(valuesForTheRobot)) {
      return null;
    }

    inversedRobot[valuesForTheRobot] = value;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
