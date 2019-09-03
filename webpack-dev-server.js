module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/goods', function (req, res) {
                    res.json({
                        list: [
                            { text: 'ጯӡଙᡈຝ຅૵', price: 100 },
                            { text: 'webق຾ຝ຅૵', price: 80 },
                            { text: 'Pythonᆻᡩ', price: 60 }
                        ]
                    });
                });
            }
        }
    }
}
