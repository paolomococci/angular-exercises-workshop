# tree

How to use Angular Schematics.

```shell
ng new tree -v -S -g --routing --style=sass
```

### I install Angular Material to this scheme

```shell
ng add @angular/material
```

### Or, if you already have this project tree, remember to type the following command inside the root directory of the same:

```shell
npm install
```

## now I add the component of interest

```shell
ng generate @angular/material:<name-of-schematics-components> components/<name-of-the-component-to-add>
```

## now I boot into development mode this scheme

```shell
ng serve -o
```
