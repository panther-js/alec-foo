# alec-foo

Tests with require().

How much time do some requires with your disk [ssd / SATA] ?

## 1 Run:

```
node alec-foo number

example:

node alec-foo 15
node alec-foo 5000
node alec-foo 42
```

## 2 Run:

```
node bench
```

Or 

```
node alec-foo 159 ; node bench
```

The test bellow creates 5000 .js files and `require()` all of them.

![Alt c](https://github.com/panther-js/alec-foo/raw/master/c10.png)

