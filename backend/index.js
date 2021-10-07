const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({data : "This is Backend"})
})


app.listen(7000,() => {
    console.log("Listening on port " + app.get('port'))
})