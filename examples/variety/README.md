# variety, app used as a template

Angular 15.1.5

## scaffolding

```shell
ng new variety -S -g --routing --style=sass --skip-install
```

This is an alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@15.1.5 ng new variety -S -g --routing --style=sass
```

## install

```shell
npm install
```

## I install Angular Material to this template

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

## I add kind component

```shell
ng g c components/kind
```

## I add helper module

```shell
ng g m modules/helper
```

## serve

```shell
ng serve -o
```
