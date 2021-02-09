# Deploying your mern stack app onto Heroku
We're going to walk you how to deploy a MERN stack app to Heroku.
MERN (Mongo, express, React, and Nodejs)

# Perequesites


* [Heroku CLI](https://dashboard.heroku.com/)
* [Git Installed](https://git-scm.com/downloads)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
## Create an account 
Create an mongo db atlas account and setup the the network and database access 

## Setting up Enviromental variables
Create an ```config.env``` file in the root directory and add the folloing in
```javascript
PORT=5000
MONGO_URI= <Your mongo db uri>
NODE_ENV=development
```
## Testing the connection
To test the application you can use the temporary data provided in ```utils``` folder 
To upload the data 
```bash
node utils/importData.js --import
```
This will test the database and create an post collection in the database
## Running the api 
In the root directory 
``` Bash
yarn install && yarn start
```
## Running the api 
``` Bash
cd client
yarn install && yarn start
```
Once we have the above steps completed, we can run the following commands to create a heroku app, configure mlab, and push our code to heroku
open terminal at root directory 
```bash
heroku create app_name
heroku addons:create mongolab:sandbox 
git add -A
git commit -m "add_message"
git push heroku master
heroku open
```




