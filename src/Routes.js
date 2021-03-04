import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContextMenuProvider from './context/MenuContext';
import MenuList from './Pages/Admin/MenuList/MenuList';
import Home from './Pages/Home/Home';
import AddMenu from './Pages/Admin/AddMenu/AddMenu';
import EditMenu from './Pages/Admin/EditMenu/EditMenu';
import CartBag from './components/CartBag/CartBag'
const Routes = () => {
  return (
    <ContextMenuProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddMenu} />
          <Route exact path="/list" component={MenuList} />
          <Route exact path="/edit/:id" component={EditMenu} />
          <Route exact path="/cartbag" component={CartBag} />
        </Switch>
      </BrowserRouter>
    </ContextMenuProvider>
  );
};

export default Routes;