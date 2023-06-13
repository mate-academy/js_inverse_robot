'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
const kolli = { 
  Kolli: 'name', 
  123: 'chipVer', 
  3: 'wheels' 
};
  const robert = { 
    Robert: 'name', 
    123: 'chipVer', 
    113: 'chipVer' 
  };


function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverseObject.hasOwnProperty(value)) {
      return null;
    }

    inverseObject[value] = key;
  }

  return inverseObject;
}



module.exports = inverseRobot;
