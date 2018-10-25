var request= require('request');
var expect= require('chai').expect;
var fs= require('fs');

var server= require('../server');

describe('tests for a static server serving the directory "served-dierctory"', function(){

    before('start the server', function(done){
        server.listen(3001, function(){
            done();
        });
    });

    describe('it should serve the correct file from the directory according to path', function(){

        it('should serve "file-a.txt" for the path "http://localhost:3001/file-a.txt', function(done){

            request('http://localhost:3001/file-a.txt', function(error, response, body){

                expect(error).to.not.exist;

                fs.readFile('./served-directory/file-a.txt', function(err, data){

                    expect(err).to.not.exist;

                    expect(body).to.equal(data.toString());
                    done();
                });
            });
        });

        it('should serve "file-b.txt" for the path "http://localhost:3001/file-b.txt', function(done){

            request('http://localhost:3001/file-b.txt', function(error, response, body){

                expect(error).to.not.exist;

                fs.readFile('./served-directory/file-b.txt', function(err, data){

                    expect(err).to.not.exist;

                    expect(body).to.equal(data.toString());
                    done();
                });
            });
        });

        it('should serve "file-c.txt" for the path "http://localhost:3001/sub-directory/file-c.txt', function(done){

            request('http://localhost:3001/sub-directory/file-c.txt', function(error, response, body){

                expect(error).to.not.exist;

                fs.readFile('./served-directory/sub-directory/file-c.txt', function(err, data){

                    expect(err).to.not.exist;

                    expect(body).to.equal(data.toString());
                    done();
                });
            });
        });

        it('should serve "index.html" for the root path "http://localhost:3001', function(done){

            request('http://localhost:3001', function(error, response, body){

                expect(error).to.not.exist;

                fs.readFile('./served-directory/index.html', function(err, data){

                    expect(err).to.not.exist;

                    expect(body).to.equal(data.toString());
                    done();
                });
            });
        });
    });

    it('should serve an error message if file is not present in the directory', function(done){

        request('http://localhost:3001/file-x.txt', function(error, response, body){

            expect(error).to.not.exist;

            expect(body).to.equal("No file exists with the given path");

            fs.readFile('./served-directory/file-x.txt', function(err, data){

                expect(err).to.exist;
                done();
            });
        });
    });

    after('close the server', function(){
        server.close();
    });
});