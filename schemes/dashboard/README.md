# dashboard

Angular 14

How to use Angular Schematics.

```shell
ng new dashboard -v -S -g --routing --style=sass
```

### I install Angular Material to this scheme

```shell
ng add @angular/material
```

### Or, if you already have this project dashboard, remember to type the following command inside the root directory of the same:

```shell
npm install
```

## now I add the component of interest

```shell
ng generate @angular/material:dashboard components/dashboard
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

![dashboard screenshot](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/dashboard_2022-06-19.png)
