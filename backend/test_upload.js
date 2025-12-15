const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const http = require('http');

const testImage = path.join(__dirname, 'test.txt');
fs.writeFileSync(testImage, 'Test file content');

const form = new FormData();
form.append('image', fs.createReadStream(testImage), {
    filename: 'test.txt',
    contentType: 'text/plain' // multer expects image, so this might fail if validation is strict.
});
// Wait, my controller checks for 'image/' mimetype. I should create a fake image or bypass check for test?
// Or mock headers.
// Controller code: if (file.mimetype.startsWith('image/')) ... 
// FormData with known length/type might work.

const options = {
    host: 'localhost',
    port: 4000,
    path: '/api/upload',
    method: 'POST',
    headers: form.getHeaders()
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

form.pipe(req);
