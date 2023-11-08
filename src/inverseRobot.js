'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotMirrorImage = {};

  for (const key of Object.keys(robot)) {
    if (robotMirrorImage.hasOwnProperty(robot[key])) {
      return null;
    }
    robotMirrorImage[robot[key]] = key;
  }

  return robotMirrorImage;
}

module.exports = inverseRobot;
