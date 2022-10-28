'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};
  const newArr = Object.keys(robot);
  let check = true;

  Object.keys(robot).forEach((key, index) => {
    if (res.hasOwnProperty(robot[key])) {
      check = false;
    } else {
      res[robot[key]] = newArr[index];
    }
  });

  return check ? res : null;
}

module.exports = inverseRobot;
