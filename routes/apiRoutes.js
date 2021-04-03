const routes = (app) => {
    app.route('/exercise')
        .get((req, res) =>
            res.send('GET request successful'))

        .post((req, res) =>
        res.send('POST request successful'))    

    app.route('/exercise/:id')
        .put((req, res) =>
        res.send('PUT request successful'))

        .delete((req, res) =>
        res.send('DELETE request successful'))
}

module.exports = routes;