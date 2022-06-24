# exercise, app used as a template

Angular 14

## scaffolding

```
ng new exercise -S -g --routing --style=sass
```

### Or, if you already have this project toggleable-menu, remember to type the following command inside the root directory of the same

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## now I add roller-blind-menu component

```shell
ng generate @angular/material:navigation components/roller-blind-menu
```

## and main-content component

```
ng g c components/main-content
```

## finally, I add practice component

```shell
ng g c components/practice
```

## now I boot into development mode this web application

```shell
ng serve -o
```
