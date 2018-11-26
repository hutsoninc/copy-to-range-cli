# copy-to-range-cli

[![Current npm package version](https://img.shields.io/npm/v/copy-to-range-cli.svg)](https://www.npmjs.com/package/copy-to-range-cli) 

Copy a file to a range of directories.

## Installation

`npm install --global copy-to-range-cli`

## Usage

```
$ copy-to-range --help

  Copy files to a range of directories.

  Usage
    $ copy-to-range <file> <int>-<int>
  Options
       --destination, -d  Destination for dirs
       --prepend, -p  Prepend to destination dir names
       --append, -a  Append to destination dir names
  Example
    $ copy-to-range file.txt 1-5,7,9-10
```

```
$ tree
.
├── file.txt
├── 1
├── 2
├── 3
├── 5
│ ...

$ copy-to-range file.txt 1-3,5

# tree
.
├── file.txt
├── 1
│   └── file.txt
├── 2
│   └── file.txt
├── 3
│   └── file.txt
├── 5
│   └── file.txt
│ ...
```

With options:

```
$ tree
.
├── file.txt
├── out
│   ├── p1a
│   ├── p2a
│   ├── p3a
│   └── p5a
│ ...

$ copy-to-range file.txt 1-3,5 --destination out --prepend p --append a

$ tree
.
├── file.txt
├── out
│   ├── p1a
│   │   └── file.txt
│   ├── p2a
│   │   └── file.txt
│   ├── p3a
│   │   └── file.txt
│   └── p5a
│       └── file.txt
│ ...
```

## Command Line/Shell Alias

### Windows

Follow the instructions on [this Stack Overflow answer](https://stackoverflow.com/a/21040825/8268314) to set up an alias on Windows.

### UNIX

```
alias mdr=make-dir-range
```

## Related

- [copy-to-range](https://github.com/hutsoninc/copy-to-range) - API for this module
- [make-dir-range-cli](https://github.com/hutsoninc/make-dir-range-cli) - Make directories from a range of integers
- [move-to-range-cli](https://github.com/hutsoninc/move-to-range-cli) - Move files to corresponding directories given a range

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details