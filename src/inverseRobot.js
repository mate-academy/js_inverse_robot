'use strict';

/**
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  // write code here

  const copyRobot = {
    ...robot,
  };
  const repaireRobot = {};
  let newKey;

  for (const detail in copyRobot) {
    repaireRobot[copyRobot[detail]] = detail;

    if (newKey === copyRobot[detail]) {
      return null;
    }

    newKey = copyRobot[detail];
  }

  return repaireRobot;
}

module.exports = inverseRobot;
