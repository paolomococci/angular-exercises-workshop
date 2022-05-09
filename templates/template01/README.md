# template01

## scaffolding

```shell
ng new template01 -v -S -g --routing --style=sass
```

## I'm adding Bootstrap support in this exercise

```shell
cd template01
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

## or I can copy this template into a working directory, and then issue the following commands

```shell
cd template01
npm install
```

## now I boot into development mode this exercise

```shell
ng serve -o
```
