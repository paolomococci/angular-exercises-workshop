# fourteen, app used as a template

Angular version 14.0.0

## scaffolding

```shell
ng new fourteen -S -g --routing --style=sass --skip-install
```

Alternative method if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.0.0 ng new fourteen -S -g --routing --style=sass --skip-install
```

### Or, if you already have this project fourteen, remember to type the following command inside the root directory of the same:

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

## now I boot into development mode this example

```shell
ng serve -o
```
