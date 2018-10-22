#local-directory-server#

An http static server written in NodeJS which serves files from the local directory named "served-directory".

##Installation and getting started##

To get started, first clone the repository and install the npm modules.
```bash
git clone https://kshitijjain@bitbucket.org/kshitijjain/local-directory-server.git
npm install
```

Then start the server using `npm start` command
```bash
npm start
```

The server will start on port 3001. Navigate to http://localhost:3001/{filename} to proceed.

##Unit Testing##
Unit test cases are written in mocha and chai. They are located in `test` directory.
To start the testing environment:
```bash
npm test
```