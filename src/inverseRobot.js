'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const entries = Object.entries(robot);
  const vals = Object.values(robot);

  if (!isDuplicated(vals)) {
    const entriesToObj = entries.map(el => el.reverse());
    const obj = Object.fromEntries(entriesToObj);

    return obj;
  }

  return null;
}

// checking for duplicated values in array
function isDuplicated(tab) {
  for (let i = 0; i < tab.length; i++) {
    if (tab.indexOf(tab[i]) !== i) {
      return true;
    };
  }

  return false;
};

module.exports = inverseRobot;
