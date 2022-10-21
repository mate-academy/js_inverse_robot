# Inverse Robot
- Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start

Transposition of internal organs is a variant of internal anatomy, when the organs are located in a mirror image.
Something similar happened to our robot Kolli. His keys became values, and values became keys. Help to repair the robot. 

`
Create a 'inverseRobot' function that takes 'robot' as a parameter and returns a new object in which keys will change places with values.
`

If any of the object values are repeated, return 'null'. 

Example:
```
 const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 inverseRobot(robert) === null
 inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
``` 
