# alec-foo

Tests with require().

How much time do some requires with your disk [ssd / sata] ?

## 1 Run:

```
node alec-foo 100

or 

node alec-foo 5000
```

## 2 Run:

```
node bench
```


![Alt c](https://github.com/panther-js/alec-foo/raw/master/c.png)


## SSD disk:

![Alt a](https://github.com/panther-js/alec-foo/raw/master/a.png)

```
[hf@archT440 ~]$ sync ; time sh -c "dd if=/dev/zero of=foo bs=100k count=1k  && sync" ; rm foo
1024+0 records in
1024+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 0.0452882 s, 2.3 GB/s

real	0m2.375s
user	0m0.003s
sys	0m0.047s
```

## SATA disk:

![Alt b](https://github.com/panther-js/alec-foo/raw/master/b.png)

```
hf@npmbox:~$  sync ; time sh -c "dd if=/dev/zero of=foo bs=100k count=1k  && sync" ; rm foo
1024+0 records in
1024+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 0,472804 s, 222 MB/s

real	0m0.977s
user	0m0.004s
sys	0m0.060s
```