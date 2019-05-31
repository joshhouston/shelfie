import React, {Component} from 'react'
import Product from '../Product/Product'


class Dashboard extends Component {
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
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Dashboard