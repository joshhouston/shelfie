const getProducts = (req, res, next) => {
    const db = req.app.get('db')

    db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
}

module.exports = {
    getProducts
}