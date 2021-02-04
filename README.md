# TaskManagment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## IF YOU GOT THE PROBLEM "An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json' Require stack:" TRY THE SOLUTION BELOW: 

# Resolution
This issue I found to be some mismatch on framework packages when I recently upgraded the Angular CLI to Angular 9. This error could also be producible due to other reasons.

After initial trivial, I was able to resolve the issue by following below steps and series of commands,

# Ideally below commands should fix this error but in case if the issue still persists please try using other below commands.

npm install --save-dev @angular-devkit/build-angular

# If the above commands don’t fix the issue, please try the below steps.

Delete node_module folder manually from local project directory
npm rm -rf node_modules

Delete package-lock.json file. (Don’t worry next npm install anyway will create a fresh package-lock.json file.)
package-lock.json

Clean NPM cache
npm cache clean --force
