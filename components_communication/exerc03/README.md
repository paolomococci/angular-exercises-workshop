# exerc03, how to use setters to intercept changes to input properties

<mark style="background-color: #ef8">I'm sorry, this code is not working as expected</mark>

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

and I changed the angular.json in two places

```text
...

            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.sass"
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
