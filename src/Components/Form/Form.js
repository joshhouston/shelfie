import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.baseState = this.state
        this.handleChange = this.handleChange.bind(this)
        this.resetState = this.resetState.bind(this)
        this.postProducts = this.postProducts.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        
        
    }

    resetState() {
        this.setState(this.baseState)
    }

    postProducts() {
        return (
            axios
                .post('/api/product', {
                    name: this.state.name,
                    price: this.state.price,
                    imgurl: this.state.imgurl
                })
                .then(res => {
                    this.props.getProducts()
                    this.resetState()
                })
        )
    }

    


    render() {
        return (
            <div className='Form'>
                <form className="inputs"
                    onSubmit={e => {e.preventDefault()}}
                >
                    
                    <input 
                        name='name'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input 
                        name='price'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input 
                        name='imgurl'
                        onChange={(e) => this.handleChange(e)}
                    />
                </form>

                <div className="buttons">
                    <button onClick={this.resetState}>Cancel</button>
                    <button onClick={this.postProducts}>Add to Inventory</button>
                </div>

            </div>
        )
    }
}

export default Form