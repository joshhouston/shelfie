import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'


class Dashboard extends Component {

    deleteProduct(id) {
        return (
          axios
            .delete('api/product/' + id)
            .then(() => {
                this.props.getProducts()
            })
        )
    }
    

    render() {
        return (
            
            <div>
                {this.props.inventory.map((product, index) => {
                    return (
                        <div key={index}>
                            <Product 
                                name={product.name}
                                price={product.price}
                                imgurl={product.url}
                                deleteProduct={this.deleteProduct}
                            />
                            <button onClick={this.deleteProduct}>delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Dashboard