'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const array = Object.values(robot);
  const isValuesAreDuplicated = array.some(item => {
    if (array.indexOf(item) !== array.lastIndexOf(item)) {
      return true;
    }
  });
  const newRobot = Object.entries(robot).map(
    ([key, value]) => ({ [value]: key })
  );

  if (isValuesAreDuplicated) {
    return null;
  }

  return Object.assign({}, ...newRobot);
}

module.exports = inverseRobot;
