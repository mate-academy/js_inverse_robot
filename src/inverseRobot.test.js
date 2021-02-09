'use strict';

describe('inverseRobot', () => {
  const inverseRobot = require('./inverseRobot');

  it(`Function 'inverseRobot' should be declared`, () => {
    expect(inverseRobot).toBeInstanceOf(Function);
  });

  it(`Function 'inverseRobot' should return 'object'`, () => {
    expect(typeof inverseRobot({})).toBe('object');
  });

  it(`input: {
      Robert: "name",
      123: "chipVer",
      113: "chipVer"
    }
    expected output: null`, () => {
    expect(
      inverseRobot({
        Robert: 'name', 123: 'chipVer', 113: 'chipVer',
      })
    ).toBe(null);
  });

  it(`input: {
      Kolli: "name",
      123: "chipVer",
      3: "wheels"
    }
    expected output: {
      name: "Kolli",
      chipVer: "123",
      wheels: "3"
    }`, () => {
    expect(
      inverseRobot({
        Kolli: 'name', 123: 'chipVer', 3: 'wheels',
      })
    ).toEqual({
      chipVer: '123', name: 'Kolli', wheels: '3',
    });
  });

  it(`input: {}
      expected output: {}`, () => {
    expect(inverseRobot({})).toEqual({});
  });

  it(`input: {
      Robert: "name",
      123: "chipVerPro",
      113: "chipVer"
    }
    expected output: {
      name: "Robert"
      chipVerPro: "123",
      chipVer: "113",
    }`, () => {
    expect(
      inverseRobot({
        Robert: 'name', 123: 'chipVerPro', 113: 'chipVer',
      })
    ).toEqual({
      chipVer: '113', chipVerPro: '123', name: 'Robert',
    });
  });

  it(`input: {
      Kolli: "name",
      123: "chipVer",
      3: "wheels",
      2: 'wheels'
    }
    expected output: null`, () => {
    expect(
      inverseRobot({
        Kolli: 'name', 123: 'chipVer', 3: 'wheels', 2: 'wheels',
      })
    ).toEqual(null);
  });

  it(`input: {
      name: 'Bob',
      age: 32,
      gender: 'male',
      interests: 'music',
    }
    expected output: {
      Bob: "name",
      32: "age",
      male: "gender",
      music: "interests"
    }`, () => {
    expect(
      inverseRobot({
        name: 'Bob', age: 32, gender: 'male', interests: 'music',
      })
    ).toEqual({
      Bob: 'name', 32: 'age', male: 'gender', music: 'interests',
    });
  });

  it(`input: {
      name: 'Bob',
      fullName: 'Bob',
      age: 32,
      gender: 'male',
      interests: 'music',
    }
    expected output: null`, () => {
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

  it(`input: {
    name: 'Bob',
    fullName: 'Bob Acad',
    age: 32,
    gender: 'male',
    interests: 'music',
    nickname: 'Bob'
  }
  expected output: null`, () => {
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
