# dnd, (Drag and Drop)

Angular 14

How to use Angular Schematics.

```shell
ng new dnd -S -g --routing --style=sass
```

### I install Angular Material to this scheme

```shell
ng add @angular/material
```

### Or, if you already have this project dnd, remember to type the following command inside the root directory of the same:

```shell
npm install
```

## now I add the component of interest

```shell
ng generate @angular/cdk:drag-drop components/dnd
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

![drag and drop screenshot](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/dnd_2022-06-20.png)
