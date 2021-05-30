To run the mocha tests: 

1. clone the repo to the local directory. 

2. open cmd.exe on window or terminal on mac and run these commands: 

   npm install 

   npm run run:cypress 

 
Notes: 

- This simple framework uses page object model. Some sites recommend not using this model with cypress but the POM was used here for the purpose of showing how one would be applied when doing automation. 

- More folders like helpers and utilities would be added in a more complex framework. There was no need to use any here. 

- If test to be run from the cypress GUI, the run this command in terminal: npm run open:cypress. When cypress open, click on \integration\regression\test.spec 

 
 