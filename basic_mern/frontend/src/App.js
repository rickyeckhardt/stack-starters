import React from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'

import Items from './components/items.js'
import CreateItem from './components/createItem.js'


function App() {
  return (
    <>
      <main className="container">
        <Switch>
          {/* <Route path="/items/:id" component={ItemForm} /> */}
          <Route exact path="/items" component={Items} />
          <Route path="/items/create" component={CreateItem} />
          {/* <Route path="/not-found" component={NotFound} /> */}
          <Redirect exact from="/" to="/items" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
