# datepicker

Angular 15.1.4

## scaffolding

```shell
ng new datepicker -S -g --routing --style=sass --skip-install
```

Alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@15.1.4 ng new datepicker -S -g --routing --style=sass --skip-install
```

### remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## I create the component for the element in question

```shell
ng g c components/kind
```

## I create the component kind-date-range-picker

```shell
ng g c components/kind-date-range-picker
```

## I create the component kind-date-filter-validation

```shell
ng g c components/kind-date-filter-validation
```

## I create the component kind-date-min-max-validation

```shell
ng g c components/kind-date-min-max-validation
```

## I create the component kind-start-date

```shell
ng g c components/kind-start-date
```

## I create the component main

```shell
ng g c components/main
```

## I create the component navbar

```shell
ng g c components/navbar
```

## now I boot into development mode this example

```shell
ng serve -o
```

![datepicker screenshot](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/datepicker_2022-07-03.png)
