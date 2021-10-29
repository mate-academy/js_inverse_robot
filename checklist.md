1. [VARIABLES] - use variables for the main values so that you'll be able to reuse them and give them descriptive names.
2. [CODE STYLE] - use correct check for property presence in object. 

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

3. [NAMNING] - use proper names for variables - if you want to name variable `result`, pick a better one :)
