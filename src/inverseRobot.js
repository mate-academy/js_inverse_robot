'use strict';

const robert = {
  Robert: 'name',
  123: 'chipVer',
  113: 'chipVerPro',
};

inverseRobot(robert);

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (robot.hasOwnProperty(value)) {
      inversedRobot[value] = key;
    }

    if (inversedRobot.hasOwnProperty(value)) {
      return null;
    }

    inversedRobot[value] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
