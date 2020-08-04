Node CMS
========

Refreshing Node knowledge by setting up a Node App which attempts to recreate [Webflow's CMS API](https://developers.webflow.com/)

Tech:
- Docker-compose runs the web server and a mongodb container
- Nodemon restarts the web server 
- Using Babel for ES6 features (import/export syntax, etc)

Getting started
---------------

Download the repo:
```
git clone https://github.com/adolfo-tamayo/node-cms.git
```

Create a .env file from the template:
```
cp .env.template .env
```

Build the docker image:
```
docker-compose build
```

Start the database and web services:
```
docker-compose up
```

You should find the app running at [http://localhost:3000](http://localhost:3000)
The process will get restarted by 