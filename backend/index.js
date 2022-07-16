const app = require('./src/app');

app.listen(app.get('port'), (err) => {
    if (err) {
        console.log(`There was an error: ${err}`);
    } else {
        console.log(`Server running on port: ${app.get('port')}`);
    }
})