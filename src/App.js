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
    
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    }
  //onSearchChange  
  render(){
    //object destructuring
    //const {monsters, searchField} =this.state
    //const filteredMonsters = monsters.filter(
    //monster => monster.name.includes(searchField)

    //)
    return(
      <div className='App'>
        <h1>Monster's Rollodex</h1>
       <SearchBox onSearchChange = {this.onSearchChange}/>
       <CardList monsters ={this.state.monsters}/>

      </div>
    )
  }
}

export default App;
