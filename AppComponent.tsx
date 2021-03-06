import * as debug from 'debug';
import * as React from 'react';
import * as uuid from 'uuid';

import { IContextDTO } from './IContextDTO.class';

import { ChildComponent } from './ChildComponent';
import { ListComponent } from './ListComponent';
import { DetailComponent } from './DetailComponent';
import { MyContext } from './MyContext';
import { CustomComponentFetch } from './CustomComponentFetch';
import { HocComponent, MyHocComponent } from './HocComponent';
import { useCatFacts } from './CustomHookFetch';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const mainDebugger: debug.Debugger = debug
  .debug('react')
  .extend('AppComponent');

interface IAppComponentProps {
  compiler?: string;
  framework?: string;
}

const AppComponent: (props: IAppComponentProps) => React.ReactElement = (
  props: IAppComponentProps
) => {
  /* Body */

  mainDebugger('AppComponent function');

  let initState: IContextDTO = {
    name: 'Pepe',
    surname: 'Perez'
    /*,
    edit: () => {
      //console.log("llamo");
      //setContextState({name:Math.random(), surname:'Gomez'})
    }*/
  };

  const [contextState, setContextState]: [
    IContextDTO,
    React.Dispatch<IContextDTO>
  ] = React.useState<IContextDTO>(initState);

  const [contextState2, setContextState2]: [
    any,
    React.Dispatch<any>
  ] = React.useState<any>({ value: contextState, edit: hola });

  /*
  const facts = useCatFacts();

  custom Hook App
  {facts.map((element: any) => {
    return (
      <p key={element._id}>
        Fact ({element.user}) <br /> {element.text}
      </p>
    );
  })} */

  function hola() {
    console.log('hola');
    setContextState({ name: Math.random(), surname: 'Gomez' });
    // setContextState2({ value: { name: Math.random(), surname: 'Gomez' }});
  }

  interface MyDTO {
    url: string;
    data: any[];
  }
  const MyComponentUrl: (props: MyDTO) => React.ReactElement = (
    props: MyDTO
  ) => {
    console.log('MyComponentUrl data from HOC', props.data);

    return <div><h1>MyComponentUrl que esta wrappeado por MyHocComponent</h1></div>;
  };

  const WrappedComponent = MyHocComponent(MyComponentUrl);

  return (
    <div>
      Hola '{props.compiler}' and framework '{props.framework}' CAT FACTS FROM
      <WrappedComponent />
      <MyContext.Provider value={contextState2}>
        <ChildComponent />
      </MyContext.Provider>
      <h2>Rutas</h2>
      <Link to="/list">Listado</Link>
      <Switch>
        <Route exact path="/list">
          <ListComponent />
        </Route>
        <Route exact path="/list/:id">
          <ListComponent />
          <DetailComponent />
        </Route>
      </Switch>
    </div>
  );
};

export { AppComponent };
