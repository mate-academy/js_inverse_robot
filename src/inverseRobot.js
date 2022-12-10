'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotEnries = Object.entries(robot);
  const unique = Array.from(new Set(robotValues));
  const reverseEnries = robotEnries.map(a => a.reverse());

  if (unique.length < robotValues.length) {
    return null;
  } else {
    return (Object.fromEntries(reverseEnries.reverse()));
  }
}

module.exports = inverseRobot;
