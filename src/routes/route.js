import React from "react";
import { Alert, Card } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import TodoList from "../containers/todoapp";
import DisplayId from "../component/displayId";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <h3><b>To Do Application</b>
          <a href="/todolist"> <HomeOutlined /></a>
        </h3>


        <hr />

        <Switch>
          <Route exact path="/" >
            <Redirect to="/todolist" />
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route exact path="/display/:id" >
            <DisplayId />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}