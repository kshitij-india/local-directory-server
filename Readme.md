#local-directory-server#

An http static server written in NodeJS which serves files from the local directory named "served-directory".

##Installation##

To get started, first clone the repository and install the npm modules.
```bash
git clone https://kshitijjain@bitbucket.org/kshitijjain/local-directory-server.git
npm install
```
##Getting Started##
Start the server using `npm start` command
```bash
npm start
```

The server will start on port 3001. Navigate to http://localhost:3001/{filename} to proceed.  
  
By default there are some files present in served-directory: `file-a`, `file-b`, `file-c` and `index.html`.
To open these files, navigate to:
```
http://localhost:3001/file-a.txt
http://localhost:3001/file-b.txt
http://localhost:3001/sub-directory/file-c.txt
```
To open index.html, there is no need to give path:
```
http://localhost:3001/
```

##Unit Testing##
Unit test cases are written in mocha and chai. They are located in `test` directory.
To start the testing environment:
```bash
npm test
```