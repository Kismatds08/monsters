import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {

      }
    }
  render(){
    return(
      <div>
        <h1>Monster's Rollodex</h1>
        <input type='search' placeholder='Search Monsters'/>
        < div className='card-list'>
          <div className='card-container'>
            <img alt='monster' src='https://robohash.org/1?set=set2&size=180x180'/>
              <h2>Monster Name</h2>
              <p>Email</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
