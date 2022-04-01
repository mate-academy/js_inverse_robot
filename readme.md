# Inverse Robot
- Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start

function inverseRobot(robot) {
  const keysArr = Object.keys(robot);
  const valuesArr = Object.values(robot);
  const copyValuesArr = [ ...valuesArr ];
  const inverseObject = {};

  for (let i = 0; i < valuesArr.length; i++) {
    const shifted = copyValuesArr.shift();

    inverseObject[valuesArr[i]] = keysArr[i];

    if (copyValuesArr.includes(shifted)) {
      return null;
    }
  }

  return inverseObject;
}