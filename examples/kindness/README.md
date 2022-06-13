# kindness, app used as a template

Angular version 14.0.0

## scaffolding

This is an alternative method, if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@14.0.0 ng new kindness -S -g --routing --style=sass
```

### Or, if you already have this project kindness, remember to type the following command inside the root directory of the same:

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

## screenshot

![kindness screenshot](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/kindness_2022-06-13.png)
