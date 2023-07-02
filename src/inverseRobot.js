'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  const inversedkeys = Object.values(robot);
  const inversedvalues = Object.keys(robot);

  for (let i = 0; i < inversedkeys.length; i++) {
    const inversedvalue = inversedvalues[i];
    const inversekey = inversedkeys[i];

    if (invertedRobot.hasOwnProperty(inversekey)) {
      return null;
    }

    invertedRobot[inversekey] = inversedvalue;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
