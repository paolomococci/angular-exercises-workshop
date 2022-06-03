# exerc03, how to use setters to intercept changes to input properties

## scaffolding

```shell
ng new exerc03 -v -S -g --skip-install --routing --style=sass --strict
```

### later, I add the dependencies

```shell
cd exerc03
npm install
```

### I integrate Bootstrap to this exercise

```shell
ng add ngx-bootstrap
```

and I changed the angular.json in two places:

```text
...

            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.sass"
            ],
...
```

at this point, it is necessary to edit file app.module.ts in the following way in order not to run into a problem that occurs in version 13 of Angular, by importing the module ReactiveFormsModule:

```text
...
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
...
```

### after creating directory components inside directory app, I typed the following shell commands

```shell
ng generate component components/vc-logs
ng generate component components/version-control
```

### finally, I boot into development mode

```shell
ng serve -o
```
