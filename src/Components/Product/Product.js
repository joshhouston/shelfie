import React, {Component} from 'react'

class Product extends Component {
    render() {
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Price: {this.props.price}</h3>
                <h3>Image: {this.props.imgurl}</h3>
            </div>
        )
    }
}

export default Product