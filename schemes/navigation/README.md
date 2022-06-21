# navigation

Angular 14

How to use Angular Schematics.

```shell
ng new navigation -S -g --routing --style=sass
```

### I install Angular Material to this scheme

```shell
ng add @angular/material
```

### Or, if you already have this project navigation, remember to type the following command inside the root directory of the same:

```shell
npm install
```

## now I add the component of interest

```shell
ng generate @angular/material:navigation components/navigation
```

## and main-content component

```
ng g c components/main-content
```

## and I boot into development mode this scheme

```shell
ng serve -o
```

## screenshot

![navigation screenshot](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/navigation_2022-06-20.png)
