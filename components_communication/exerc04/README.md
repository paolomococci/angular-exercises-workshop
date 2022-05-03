# exerc04, in this exercise I using SimpleChanges API

<mark>exercise currently under development</mark>

## scaffolding

```shell
ng new exerc04 -v -S -g --routing --style=sass
```

## I'm adding Bootstrap support in this exercise

```shell
ng add ngx-bootstrap
```

at this point, it is necessary to add references to styles by editing file angular.json by adding the following line of code twice:

```text
"./node_modules/bootstrap/dist/css/bootstrap.min.css",
```

before the lines where the default styles for that application are indicated:

```text
"src/styles.sass"
```

### after creating directory components inside directory app, I typed the following shell commands

```shell
ng generate component components/vc-logs
ng generate component components/version-control
```

## Now I develop the application code and finally, I boot into development mode

```shell
ng serve -o
```
