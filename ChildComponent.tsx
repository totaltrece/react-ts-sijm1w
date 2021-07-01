import * as debug from 'debug';
import * as React from 'react';

import { IContextDTO } from './IContextDTO.class';
import { MyContext } from './MyContext';

const mainDebugger: debug.Debugger = debug
  .debug('react')
  .extend('ChildComponent');

const ChildComponent: (props: IListComponentProps) => React.ReactElement = (
  props: IListComponentProps
) => {
  //mainDebugger('ListComponent function');

  const myContext: any = React.useContext(MyContext);

  return (
    <div>
      <p>
        context en child: {myContext.value.name} {myContext.value.surname}
      </p>
      <p>
        <button onClick={myContext.edit}>Edit</button>
      </p>
    </div>
  );
};

export { ChildComponent };
