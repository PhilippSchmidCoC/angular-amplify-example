# AmplifyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
Deploy it to AWS Amplify Console:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/gsans/amplify-app-angular)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Getting started

Ask @philipp to get `aws-exports.js`, file should be placed in `src/`. The file includes all required permission keys.

## Configure amplify

Run `amplify configure` to set up your amplify console.

### Installing the AWS Amplify CLI

Next, we'll install the AWS Amplify CLI:

```bash
npm install -g @aws-amplify/cli
```

Now we need to configure the CLI with our credentials:

```js
amplify configure
```

> If you'd like to see a video walkthrough of this configuration process, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U).

Here we'll walk through the `amplify configure` setup. Once you've signed in to the AWS console, continue:

- Specify the AWS Region: **ap-south-1(Mumbai)**
- Specify the username of the new IAM user: **amplify-app**
  > In the AWS Console, click **Next: Permissions**, **Next: Tags**, **Next: Review**, & **Create User** to create the new IAM user. Then, return to the command line & press Enter.
- Enter the access key of the newly created user:  
  accessKeyId: **(<YOUR_ACCESS_KEY_ID>)**  
  secretAccessKey: **(<YOUR_SECRET_ACCESS_KEY>)**
- Profile Name: **default**

> To view the new created IAM User go to the dashboard at [https://console.aws.amazon.com/iam/home#/users/](https://console.aws.amazon.com/iam/home#/users/). Also be sure that your region matches your selection.

### Initializing A New Project

```bash
amplify init
```

- Enter a name for the project: **amplify-app**
- Enter a name for the environment: **dev**
- Choose your default editor: **Visual Studio Code**
- Please choose the type of app that you're building **javascript**
- What javascript framework are you using **angular**
- Source Directory Path: **src**
- Distribution Directory Path: **dist/amplify-app**
- Build Command: **npm run-script build**
- Start Command: **ng serve**
- Please choose the profile you want to use: **default**
- Do you want to use an AWS profile? **Yes**
- Please choose the profile you want to use **default**

Now, the AWS Amplify CLI has iniatilized a new project & you will see a new folder: **amplify**. The files in this folder hold your project configuration.

```bash
<amplify-app>
    |_ amplify
      |_ .config
      |_ #current-cloud-backend
      |_ backend
      team-provider-info.json
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
