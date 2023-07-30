'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot (robot) {
  const INVERSE_ROBOT = {};
  let COUNT = 0;
  let COUNT_INVERSE = 0;

  for (const key in robot) {
    INVERSE_ROBOT[robot[key]] = key;
    if (robot.hasOwnProperty(key)) {
      COUNT++;
    }
  }

  for (const key in INVERSE_ROBOT) {
    if (INVERSE_ROBOT.hasOwnProperty(key)) {
      COUNT_INVERSE++;
    }
  }

  if (COUNT !== COUNT_INVERSE) {
    console.log(null); 
    return;
  }

  console.log(INVERSE_ROBOT);

}

module.exports = inverseRobot;
