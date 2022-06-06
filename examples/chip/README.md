# chip

Angular version 14.0.0

## scaffolding

This is an alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.0.0 ng new chip -S -g --routing --style=sass
```

### Or, if you already have this project chip, remember to type the following command inside the root directory of the same:

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

## I create the interface ChipColor

```shell
ng g interface models/ChipColor --type=model
```

## I create app-kind-autocomplete component

```shell
ng g c components/kind-autocomplete
```

## I create app-kind-avatar component

```shell
ng g c components/kind-avatar
```

## I create app-kind-dnd component

```shell
ng g c components/kind-dnd
```

## I create app-kind-form-control component

```shell
ng g c components/kind-form-control
```

## I create app-kind-input component

```shell
ng g c components/kind-input
```

## I create the interface Fruit

```shell
ng g interface models/Fruit --type=model
```

## now I boot into development mode this example

```shell
ng serve -o
```
