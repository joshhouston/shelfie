import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
    this.getProducts = this.getProducts.bind(this)
 
  }
  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
      .get('api/inventory')
      .then(response => {
        this.setState({inventory: response.data})
        console.log(this.state.inventory)
      })
      .catch(error => {
        console.log(error)
        this.setState({error: 'No good'})
      })
  }

  

  render() {
    return (
      <div>
        <Header />
        <Dashboard 
            inventory={this.state.inventory}
            getProducts={this.getProducts}
        />
        <Form getProducts={this.getProducts}/>
      </div>

    );
  }
}

export default App;
