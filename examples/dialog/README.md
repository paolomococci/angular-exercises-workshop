# dialog

Angular version 14.0.4

## scaffolding

```shell
ng new dialog -S -g --routing --style=sass --skip-install
```

Alternative method if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.0.0 ng new dialog -S -g --routing --style=sass --skip-install
```

### Or, if you already have this project dialog, remember to type the following command inside the root directory of the same:

```shell
npm install
```

### I install Angular Material to this example

```shell
ng add @angular/material
```

## I add main component

```shell
ng g c components/main
```

## I add navbar component

```shell
ng g c components/navbar
```

## I add the component for the element in question

```shell
ng g c components/kind
```

## I add dialog-content component

```shell
ng g c components/dialog-content
```

## I add kind-animation component

```shell
ng g c components/kind-animation
```

## I add kind-slowly component

```shell
ng g c components/kind-slowly
```

## I add dialog-animation component

```shell
ng g c components/dialog-animation
```

## I add injector component

```shell
ng g c components/injector
```

## I add injected-data-dialog component

```shell
ng g c components/injected-data-dialog
```

## I add Fruit interface

```shell
ng g i models/Fruit --type=model
```

## I add kind-overview component

```shell
ng g c components/kind-overview
```

## I add dialog-overview component

```shell
ng g c components/dialog-overview
```

## I add Vegetables interface

```shell
ng g i models/Vegetables --type=model
```

## now I boot into development mode this example

```shell
ng serve -o
```
