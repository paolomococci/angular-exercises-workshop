# panel

Angular 15.2.0

## scaffolding

```shell
ng new panel -S -g --routing --style=sass --skip-install
```

Alternative method if you do not intend to install the latest version globally, at least not for the moment.

```shell
npx -p @angular/cli@15.1.5 ng new panel -S -g --routing --style=sass --skip-install
```

### Or, if you already have this project panel, remember to type the following command inside the root directory of the same:

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

## now I boot into development mode this example

```shell
ng serve -o
```

## important note

In this type of application it is of fundamental importance to add the following modules to the app.module.ts file:

1. FormsModule
2. ReactiveFormsModule
3. MatFormFieldModule
4. MatInputModule
5. MatDatepickerModule
6. MatNativeDateModule

especially the fourth on the list.

![panel screenshot](https://github.com/paolomococci/angular-exercises-workshop/blob/main/screenshots/panel_2022-07-17.png)
