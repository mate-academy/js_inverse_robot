'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObject = {};

  //  now we are iterating the object
  for (const keys in robot) {
    //  here we need to check
    //  if the resultObject has the same key as our iterator
    if (resultObject[robot[keys]]) {
      //  if yes, the fuction will return null
      return null;
    } else {
      //  if no, the function will write the key and its value
      resultObject[robot[keys]] = keys;
    }
  };

  return resultObject;
}

module.exports = inverseRobot;
