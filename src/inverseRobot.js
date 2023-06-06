'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  
  for (const key in robot) {
    const value = robot[key];
    
    if (invertedRobot[value] !== undefined) {
      // If the value is already a key in invertedRobot, it's a duplicate
      return null;
    }
    
    invertedRobot[value] = key;
  }
  
  return invertedRobot;
}

module.exports = inverseRobot;
