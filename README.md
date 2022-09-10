# timeRandom.js
Create random numbers between 1 and 0, using time based input or custom seed!

# Examples
```js
random();

/* Outputs:
0.1369878964156875
0.1608158635845989
0.3117863577336582
0.2956732209992864
0.1660841049817118
0.3639876537712583
0.3009414623961496
0.1712561227916386
0.4171511856803396
0.2748582549015969
*/

```

```js
random(29136840827);

// Output: 0.1936389235345257
```

```js
random(213);

// Output: "Error: Seed must be 4 digits or more, (a.k.a. 1000 or more)"
```

```js
random(213, false);

// Output: 0
```

```js
random("Random.js");

// Output: "Error: Seed must be valid a number"
```

```js
random("Random.js", false);

// Output: 0
```

```js
random("4214543");

// Output: 0.1403040694566409
```
