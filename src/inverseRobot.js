'use strict';

const robert = {
  Robert: 'name',
  123: 'chipVer',
  113: 'chipVerPro',
};

inverseRobot(robert);

function inverseRobot(robot) {
  const inversedRobot = {};

  if (robot.hasOwnProperty('name') && robot.name !== 'name') {
    inversedRobot[robot.name] = 'name';
  }

  for (const objectKey in robot) {
    const objectValue = robot[objectKey];

    if (objectKey !== 'name') {
      if (Object.keys(inversedRobot).includes(objectValue)) {
        return null;
      }
    }

    inversedRobot[objectValue] = objectKey;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
