import React from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: '',
      }
    }

    componentDidCatch(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    }

  render(){
    return(
      <div className='App'>
        <h1>Monster's Rollodex</h1>
       <SearchBox/>
       <CardList monsters ={this.state.monsters}/>
      </div>
    )
  }
}

export default App;
