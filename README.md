# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Setup
* Go to the client folder and run `npm i`  
* Then go to the api folder in [api](https://github.com/starkpero/api) repo and run `npm i`  
* Then go to the rmptServer folder in [rmtpServer](https://github.com/starkpero/rtmp-server) repo and run `npm i`  
* Install OBS in you system and setup basic streaming  
* Then to start stream go to OBS settings, then navigate to streams, select custom and paste rtmp://localhost/live in server input  
* Then get an API key for Google OAuth Login from [Google Api](https://console.cloud.google.com/apis/dashboard?project=streams-334417)  
* Then in the client folder make a .env file and paste you api key along with the following variable: REACT_APP_GOOGLE_CLIENT_ID. Example: REACT_APP_GOOGLE_CLIENT_ID="XXYYZZ".  
* Open three terminal sessions and in one session navigate to the client folder and run npm start, then navigate to rmtpServer folder and run npm start and then navigate to api   folder and run npm start.  
* The client side will run on Port 3000, RMTP will run on Port 8000 and api side will run on Port 3001  

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

![React App - Google Chrome 14-12-2021 22_47_13 (2)](https://user-images.githubusercontent.com/77169816/146048005-324c3aee-e090-4ddd-a37c-f5d2fb282f53.png)  
![React App - Google Chrome 14-12-2021 22_48_44](https://user-images.githubusercontent.com/77169816/146048235-c986cd08-2c57-4361-a7fd-1ebe6d16d3d6.png)  
![React App - Google Chrome 14-12-2021 22_26_50](https://user-images.githubusercontent.com/77169816/146048372-8e679a8e-3367-4ecf-a4be-ca13a7c44738.png)  
![React App - Google Chrome 14-12-2021 22_27_02](https://user-images.githubusercontent.com/77169816/146048534-14b08e90-6211-4e18-99a7-8485c5e1cb36.png)

