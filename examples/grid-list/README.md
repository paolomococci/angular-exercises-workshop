# grid-list

Angular version 14.1.0

## scaffolding

```shell
ng new grid-list -S -g --routing --style=sass --skip-install
```

Alternative method if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.1.0 ng new grid-list -S -g --routing --style=sass --skip-install
```

### Or, if you already have this project grid-list, remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## I create main component

```shell
ng g c components/main
```

## I create navbar component

```shell
ng g c components/navbar
```

## I create component for the element in question

```shell
ng g c components/kind
```

## I create Tile interface

```shell
ng g i interfaces/Tile --type=model
```

## now I boot into development mode this example

```shell
ng serve -o
```
