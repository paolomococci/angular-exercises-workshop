# FlatMapOperator

This exercise uses as an API an endpoint application that I am currently developing and which is in my repository api-workshop, in particular it is application dummy-users.

## scaffolding

```shell
ng n flatmap-operator --routing --skip-tests --skip-install --style=sass
```

## add changeless class

```shell
ng g cl constants/changeless
```

## add user interface

```shell
ng g i interfaces/user --type=model
```

## add user service

```shell
ng g s services/user
```

## add home component

```shell
ng g c components/home
```

## add user-detail component

```shell
ng g c components/user-detail
```

## add loader component

```shell
ng g c components/loader
```

## add user-card component

```shell
ng g c components/user-card
```

## add footer component

```shell
ng g c components/footer
```

## install

```shell
npm install
```

## serve in development mode

```shell
ng serve -o
```
