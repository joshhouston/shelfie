import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {
          name: 'tshirt',
          price: 3,
          imgurl: 'shirt.jpg'
        },
        {
          name: 'jeans',
          price: 7,
          imgurl: 'jean.jpg'
        }
      ],

      testing: 'test complete'
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form />
      </div>

    );
  }
}

export default App;
