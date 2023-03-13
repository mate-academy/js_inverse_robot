'use strict';

const robert = {
  Robert: 'name',
  123: 'chipVer',
  113: 'chipVerPro',
};

inverseRobot(robert);

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inversedRobot.hasOwnProperty(value)) {
      return null;
    }

    inversedRobot[value] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
