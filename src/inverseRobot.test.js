'use strict';

describe(`Function 'inverseRobot'`, () => {
  const inverseRobot = require('./inverseRobot');

  it(`should be declared`, () => {
    expect(inverseRobot).toBeInstanceOf(Function);
  });

  it(`should return an object`, () => {
    expect(typeof inverseRobot({})).toBe('object');
  });

  it(`should not modify the input object`, () => {
    const robot = {
      Kolli: 'name',
      123: 'chipVer',
      3: 'wheels',
    };

    inverseRobot(robot);

    expect(robot)
      .toEqual({
        Kolli: 'name', 123: 'chipVer', 3: 'wheels',
      });
  });

  it(`should return null if there are two 'chipVer' values`, () => {
    expect(
      inverseRobot({
        Robert: 'name', 123: 'chipVer', 113: 'chipVer',
      })
    ).toBe(null);
  });

  it(`should return a robot with inversed keys and values if all three values 
    are unique`, () => {
    expect(
      inverseRobot({
        Kolli: 'name', 123: 'chipVer', 3: 'wheels',
      })
    ).toEqual({
      chipVer: '123', name: 'Kolli', wheels: '3',
    });
  });

  it(`should return an empty object if the input is empty`, () => {
    expect(inverseRobot({})).toEqual({});
  });

  it(`should return a robot with inversed keys and values if some keys are 
    similar but still unique`, () => {
    expect(
      inverseRobot({
        Robert: 'name', 123: 'chipVerPro', 113: 'chipVer',
      })
    ).toEqual({
      chipVer: '113', chipVerPro: '123', name: 'Robert',
    });
  });

  it(`should return null if there are two 'wheels' values`, () => {
    expect(
      inverseRobot({
        Kolli: 'name', 123: 'chipVer', 3: 'wheels', 2: 'wheels',
      })
    ).toEqual(null);
  });

  it(`should return a robot with inversed keys and values if all four values 
    are unique`, () => {
    expect(
      inverseRobot({
        name: 'Bob', age: 32, gender: 'male', interests: 'music',
      })
    ).toEqual({
      Bob: 'name', 32: 'age', male: 'gender', music: 'interests',
    });
  });

  it(`should return null if the values for 'name' and 'fullName' are the same 
    in the input object`, () => {
    expect(
      inverseRobot({
        name: 'Bob',
        fullName: 'Bob',
        age: 32,
        gender: 'male',
        interests: 'music',
      })
    ).toEqual(null);
  });

  it(`should return null if the values for 'name' and 'nickname' are the same 
    in the input object`, () => {
    expect(
      inverseRobot({
        name: 'Bob',
        fullName: 'Bob Acad',
        age: 32,
        gender: 'male',
        interests: 'music',
        nickname: 'Bob',
      })
    ).toEqual(null);
  });
});
