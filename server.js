const axios = require('axios');
const express = require('express');
const app = express();
const port = 4000

app.get('/:random', function(req, res, next) {
    axios.get('https://dog.ceo/api/breeds/image/' + req.params.random)
    .then(response =>{
        const data = response.data;
        var ret = data.message;
        res.send(ret);
    }).catch(err => console.log(err));

    /*
    const ans = books[req.params.title];
    res.send(ans);
    */
});

app.listen(port, () => console.log('Listening on port ' + port));

module.exports = app;