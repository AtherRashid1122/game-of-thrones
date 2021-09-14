import React from 'react'
import { Route, Switch } from "react-router-dom";
import Showtitle from './component/showtitle';
import Showtodo from './component/Showtodo';

export const App = () => {


  return (
    <div>
      <Switch>
        <Route component={Showtodo} exact path="/showtodo">
          <Showtodo />
        </Route>
        <Route exact component={Showtitle} path="/showtitle">
          <Showtitle />
        </Route>

      </Switch>
    </div >
  )
}

export default App
