const getProducts = (req, res, next) => {
    const db = req.app.get('db')

    db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
}

const addProducts = (req, res, next) => {
    const db = req.app.get('db')
    const {name, price, imgurl} = req.body

    db.create_product(name, price, imgurl)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
        })
}

const deleteProducts = (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'something wrong'})
            console.log(err)
        })
}

module.exports = {
    getProducts,
    addProducts,
    deleteProducts
}