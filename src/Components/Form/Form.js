import React, {Component} from 'react'

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
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
        
    }

    resetState() {
        this.setState(this.baseState)
    }


    render() {
        return (
            <div className='Form'>
                <div className="inputs">
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
                </div>

                <div className="buttons">
                    <button onClick={this.resetState}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>

            </div>
        )
    }
}

export default Form