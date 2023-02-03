'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // const result = {};

  // // Object.keys(robot).forEach(key => {
  // //   result[robot[key]] = key;
  // // });

  // // const valuesOfRobot = Object.values(robot);

  // // for (const value in ret) {
  // //   if (valuesOfRobot === value) {
  // //     return null;
  // //   }
  // // }

  // for (const property in robot) {
  //   result[robot[property]] = robot;
  // }

  // console.log(result);
  const result = {};

  for (const property in robot) {
    result[robot[property]] = property;
  }

  const valuesOfRobot = Object.values(robot);
  const valuesOfResult = Object.values(result);

  if (valuesOfResult.length < valuesOfRobot.length) {
    return null;
  }

  return result;
}

module.exports = inverseRobot;
