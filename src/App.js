import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';

import Maps from './pages/Maps';
import SingleMap from './pages/SingleMap';
import Form from './components/form';
import AddDetails from './pages/AddDetails';

function App(props) {
  // global variables
  const url = "https://django-miniproject-dv.herokuapp.com/maps/"
  const nullMap = {
    rows: 1,
    columns: 1,
    layout: []
  }
  // state
  const [maps, setMaps] = useState([])

  // functions
  const getMaps = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setMaps(data)
  }

  const addMap = async (newMap) => {
    // randomize layout array
    for (let i = 0; i < (newMap.rows * newMap.columns); i++) {
      newMap.layout.push(Math.round(Math.random()))
    }
    newMap.layout = await newMap.layout.join("")
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMap)
    })
    getMaps()
  }

  const updateMap = async (map) => {
    await fetch(url + map.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(map)
    })
    getMaps()
  }

  const deleteMap = async (map) => {
    await fetch(url + map.id +"/",{
      method: "delete"
    })
    props.history.push("/")
    getMaps()
  }

  // useEffects
  useEffect(()=> {getMaps()},[])

  // styling
  const h1 = {
    fontFamily: "'Staatliches', cursive",
    fontSize: "4rem",
    color: "var(--dark-br)",
    textShadow: "2px 4px 6px var(--green)"
  }

  const link = {
    textDecoration: "none"
  }

  return (
    <div className="App">
      <Link to="/" style={link}>
        <h1 style={h1}>Mapapalooza</h1>
      </Link>
      <Form 
        nullMap={nullMap}
        handleSubmit={addMap}
      />
      <Switch>
        <Route 
          exact path="/"
          render={(routerprops) => (
            <Maps 
              {...routerprops} 
              maps={maps} 
            />
          )}
        />
        <Route 
          path="/map/:id"
          render={(routerprops) => (
            <SingleMap 
              {...routerprops} 
              maps={maps}
              deleteMap={deleteMap} 
            />
          )}
        />
        <Route 
          path="/edit/:id"
          render={(routerprops) => (
            <AddDetails 
              {...routerprops} 
              maps={maps} 
              handleSubmit={updateMap}
              deleteMap={deleteMap} 
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
