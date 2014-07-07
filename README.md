# nodetree

> list contents of directories in a tree-like format similar to the [Tree Command](http://mama.indstate.edu/users/ice/tree/).


## SYNOPSIS

`nodetree`  \[`-ad`\]  \[`-L`  \<level>] \[`--noreport`] \[`--version`] \[`--help`] \[`--prune`] \[\<directory> ...]


## DESCRIPTION

_Nodetree_ is a recursive directory listing program that produces a depth indented listing of files. With no arguments, _nodetree_ lists the files in the current directory. When directory arguments are given, _nodetree_ lists all the files and/or directories found in the given directories each in turn. Upon completion of listing all files/directories found, _nodetree_ returns the total number of files and/or directories listed. _Nodetree_ is heavily inspired by the [Tree Command](http://mama.indstate.edu/users/ice/tree/).

## INSTALL

```sh
$ npm install --save nodetree
```

## NODE

With defaults:
```js
var nodetree = require('nodetree');
nodetree(process.cwd());
```

With all options set:
```js
var nodetree = require('nodetree');
nodetree(process.cwd(), {
  all: false,
  directories: false,
  level: 2,
  prune: false,
  noreport: false
});
```


## CLI

```sh
$ npm install -g nodetree
```

```sh
$ man nodetree
```

## OPTIONS

_Nodetree_ understands the following command line switches:


## NODE OPTIONS

### nodetree(basepath, options)

#### options.all
Type: `Boolean`  
Default: `false`  
See cli option `-a` below.  

#### options.directories ####
Type: `Boolean`  
Default: `false`  
See cli option `-d` below.  

#### options.level
Type: `int`  
Default: `null`  
See cli option `-L` below.  

#### options.prune
Type: `Boolean`  
Default: `false`  
See cli option `--prune` below.  

#### options.noreport
Type: `Boolean`  
Default: `false`  
See cli option `--noreport` below.  

## CLI OPTIONS

  * `-a`:
    All files are printed. By default tree does not print hidden files (those beginning with a dot '.'). In no event does tree print the file system constructs '.' (current directory) and '..' (previous directory).

  * `-d`:
    List directories only.

  * `-L` <level>:
    Max display depth of the directory tree.

  * `--prune`:
    Makes tree prune empty directories from the output.

  * `--noreport`:
    Omits printing of the file and directory report at the end of the tree listing.

  * `--version`:
    Outputs the version of nodetree.

## AUTHOR

  Written by Larry Gordon


## COPYRIGHT

  [The MIT License (MIT)](http://psyrendust.mit-license.org/2014)
