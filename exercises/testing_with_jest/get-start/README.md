# GetStart

## scaffolding

```shell
ng n get-start --routing --skip-install --style=sass
```

## installation

```shell
npm install
```

## install Jest

```shell
npm i jest --save-dev
npm i @types/jest --save-dev
npm i jest-preset-angular --save-dev --legacy-peer-deps
```

## remove some packages

```shell
npm r karma karma-chrome-launcher karma-jasmine-html-reporter @types/jasmine jasmine-core karma-jasmine --legacy-peer-deps
```

Also I deleted the karma.conf.js and src/test.ts files. 
I created the jestSetup.ts file. 
I have edited the package.json, angular.json and tsconfig.spec.json files.
