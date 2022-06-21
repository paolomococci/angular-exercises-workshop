# table

Angular 14

How to use Angular Schematics.

```shell
ng new table -v -S -g --routing --style=sass
```

### I install Angular Material to this scheme

```shell
ng add @angular/material
```

### Or, if you already have this project table, remember to type the following command inside the root directory of the same:

```shell
npm install
```

## now I add the component of interest

```shell
ng generate @angular/material:table components/table
```

## and main-content component

```
ng g c components/main-content
```

## now I boot into development mode this scheme

```shell
ng serve -o
```

## screenshot

![table screenshot](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/table_2022-06-21.png)
