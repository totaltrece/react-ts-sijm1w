import * as debug from 'debug';
import * as React from 'react';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { DetailComponent } from './DetailComponent';

const ListComponent: (props: IListComponentProps) => React.ReactElement = (
  props: IListComponentProps
) => {
  //mainDebugger('ListComponent function');

  return (
    <div>
      <p>List component</p>
      <ul>
        <li>
          <Link to="/list/1">Detalle 1</Link>
        </li>
        <li>
          <Link to="/list/2">Detalle 2</Link>
        </li>
        <li>
          <Link to="/list/3">Detalle 3</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/list/:id">
          <DetailComponent />
        </Route>
      </Switch>
    </div>
  );
};

export { ListComponent };
