'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const ret = {};
  const array = Object.keys(robot);
  
  array.forEach(key => {
    ret[robot[key]] = key;
  });

  const difference = Object.keys(ret);

  if (array.length !== difference.length) {
    return null;
  }

  return ret;
}

const  ape = {name: "asi", sure: "assni", last: "as" }

module.exports = inverseRobot;
