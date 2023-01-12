'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  // Check if we have any repeated value
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return null;
      }
    }
  }

// return inversed object
  return Object.keys(robot).reduce((ret, key) => {
    ret[robot[key]] = key;
    
    return ret;
  }, {});
}

module.exports = inverseRobot;
