# menu

Angular version 14.2.3

## scaffolding

```shell
ng new menu -S -g --routing --style=sass --skip-install
```

Alternative method if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.2.3 ng new menu -S -g --routing --style=sass --skip-install
```

### Or, if you already have this project menu, remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## I create the main component

```shell
ng g c components/main
```

## I create the navbar component

```shell
ng g c components/navbar
```

## I create the component for the element in question

```shell
ng g c components/kind
```

## I create kind-iconic

```shell
ng g c components/kind-iconic
```

## I create kind-positioning

```shell
ng g c components/kind-positioning
```

## now I boot into development mode this example

```shell
ng serve -o
```
