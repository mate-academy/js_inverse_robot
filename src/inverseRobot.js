'use strict';

function inverseRobot(robot) {
  let counter = 1;

  for (const key of Object.keys(robot)) {
    const arr = Object.values(robot);

    for (let i = counter; i < arr.length; i++) {
      if (robot[key] === arr[i]) {
        return null;
      }
    }
    counter++;
    robot[robot[key]] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
