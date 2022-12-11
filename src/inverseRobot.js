'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let retObj = {};

  const findDuplicateValues = (obj) => {
    const objValues = Object.values(obj);
    const retRes = objValues.some((elem, index) => {
      return objValues.indexOf(elem) !== index;
    });

    return retRes;
  };

  if (findDuplicateValues(robot)) {
    retObj = null;
  } else {
    const reverseObject = (obj) => {
      const newObj = Object.fromEntries(Object.entries(obj).map(
        ([k, v]) => [v, k])
      );

      return newObj;
    };

    retObj = reverseObject(robot);
  }

  return retObj;
}

module.exports = inverseRobot;
