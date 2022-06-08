# datepicker, app used as a template

Angular version 14.0.0

## scaffolding

This is an alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.0.0 ng new datepicker -S -g --routing --style=sass
```

### Or, if you already have this project datepicker, remember to type the following command inside the root directory of the same:

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

## now I boot into development mode this example

```shell
ng serve -o
```
