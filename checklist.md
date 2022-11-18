1. [VARIABLES] - use variables for the main values so that you'll be able to reuse them and give them descriptive names.
2. [CODE STYLE] - use correct check for property presence in object. Some properties can be present, but still contain falsy value.

GOOD EXAMPLE: 
```
if (key in robot) {
```

EVEN BETTER EXAMPLE:

```
if (robot.hasOwnProperty(key)) {
```

BAD EXAMPLE:
```
if (robot[key] === undefined) {

if (robot[key]) {
```

3. [NAMING] - use proper names for variables - if you want to name variable `result`, pick a better one :)

4. [CODE STYLE] - You should return the value immediately in `if` statements. And don't use `else` after return statement. If `return` is performed - code after it won't be executed anyway.
BAD EXAMPLE:
```
if (condition) {
  return x;
} else {
  return y;
}
```
GOOD EXAMPLE: 
```
if (condition) {
  return x;
}
return y;
```
