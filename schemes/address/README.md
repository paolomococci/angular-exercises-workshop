# address

Angular 14.2.9

How to use Angular Schematics.

```shell
ng new address -S -g --routing --style=sass
```

### I install Angular Material to this scheme

```shell
ng add @angular/material
```

### Or, if you already have this project address, remember to type the following command inside the root directory of the same:

```shell
npm install
```

## now I add the component of interest

```shell
ng generate @angular/material:address-form components/address-form
```

## and main-content component

```
ng g c components/main-content
```

## and I boot into development mode this scheme

```shell
ng serve -o
```

## screenshot

![address form](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/address_2022-06-19.png)
