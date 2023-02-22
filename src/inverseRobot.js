'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const component in robot) {
    if (inverse[robot[component]]) {
      return null;
    }

    inverse[robot[component]] = component;
  }

  return inverse;
}

module.exports = inverseRobot;
