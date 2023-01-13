'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);

  // Check if we have any repeated value
  if (values.some((item, index) => values.indexOf(item) !== index)) {
    return null;
  }

  // return inversed object
  return Object.keys(robot).reduce((ret, key) => {
    ret[robot[key]] = key;

    return ret;
  }, {});
}

module.exports = inverseRobot;
