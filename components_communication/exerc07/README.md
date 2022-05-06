# exerc07

## scaffolding

```shell
ng new exerc07 -v -S -g --routing --style=sass
```

## I'm adding Bootstrap support in this exercise

```shell
cd exerc07
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

## after creating directory components inside directory app, I typed the following shell commands

```shell
ng generate component components/profile-card
ng generate component components/social-card
ng generate component components/chirping-card
```
