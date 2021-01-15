# Angular Crash Course

The code in this repository is based on [Traversy Media's](https://www.traversymedia.com/) [Angular Crash Course](https://www.youtube.com/watch?v=Fdf5aTYRW0E) video tutorial. The aim of the tutorial is to provide an introduction to the [Angular](https://angular.io/) platform by building a simple todo (task list) application. Note that I use [typescript](https://www.typescriptlang.org/) here instead of javascript and this leads to some interesting type definitions and subtle differences between the code in the video and my code. Most of these differences are necessary in order to appease the typescript compiler which is pretty darn strict and found a lot of Brad's bugs before he found them in the video! Also I configur Angluar to use [Sass](https://sass-lang.com/) instead of regular CSS because I prefer its feature set. This is done by using the `--style=scss` option when using the [ng new](https://angular.io/cli/new) command in the [Angular CLI](https://cli.angular.io/) to create the project.

## Prerequisites

1. Install [nodejs](https://nodejs.org/).
2. Install [Visual Studio Code](https://code.visualstudio.com/download) (optional).

## Running the code

1. You will be prompted to install the the recommended extensions if you open up the code folder in Visual Studio Code. There is only one extension - `Prettier` - which is a code formatter. The recommended extensions can be found in the `extensions.json` file in the `.vscode` directory should you wish to edit these. Likewise in the same directory you can find the `settings.json` file should you wish to edit the recommended settings. If you choose to not use Visual Studio code, you can always use step 4 instead to run prettier.
2. Run `npm install` from the project folder to install the dependencies listed in the `package.json` file.
3. Run `npm start` from the project folder to launch the Angular development server. This command will launch the application in your default web browser and will watch for and compile changes to source files.
4. Run `npm run prettier` from the project folder whenever you make changes and wish to format all files in the project.

## Deployment

If you wish to deploy the website then run the command `npm run build` from the project folder. This will create a `dist` directory with the application build artifacts. You can then deploy this folder on any web server that you want.
