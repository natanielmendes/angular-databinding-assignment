# AngularDatabindingAssigment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

There is an ngFor which loops an array with the numbers provided by game-control counter events, inside this ngFor div there are 2 ngIfs. 

One for showing the even component:
```
<app-even *ngIf="number%2 === 0" [number]="number"></app-even>
```
and another to display the odd component:
```
<app-odd *ngIf="number%2 !== 0" [number]="number"></app-odd>
```
I did not find any problem during this task, once requirements were well explained and base knowledge is sharp to complete this.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

I used string interpolation in the odd and even components to display the @Input number provided by the main app component. An event is emitted in the counter created in the game-control component after play button is clicked and listened by the main app component, which stores the received values in an array.