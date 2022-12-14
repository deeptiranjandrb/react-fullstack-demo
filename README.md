# Adding a proxy server for your react app

you can configure a server to be your proxy in package.json so that in development environment you don't have to configure cors or mention host name while making request to the backend. This


## Production setup

for production, you can setup your backend server to serve the build/index.html file so that client side code will be served from the same server and you won't have to worry about CORS.

## Use Case

This project is to demo how to server both front end and backend from one server in production and how to make use of proxy feature in package.json in development environment.