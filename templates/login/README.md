# login

## scaffolding

```shell
ng new login -v -S -g --routing --style=sass
```

## I'm adding Bootstrap support in this template

```shell
cd login
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
cd login
npm install
```

## now I boot into development mode this template

```shell
ng serve -o
```
