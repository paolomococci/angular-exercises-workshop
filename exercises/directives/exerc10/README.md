# exerc10

An example of how to implement a directive that is used to calculate the reading time of an article.

## scaffolding

```shell
ng new exerc10 -v -S -g --routing --style=sass
```

## I'm adding Bootstrap support in this exercise

```shell
cd exerc09
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

### at this point I add the directives directory inside the app directory and type the following command

```shell
ng g d directives/read-time
```

### now I boot into development mode this exercise

```shell
ng serve -o
```
