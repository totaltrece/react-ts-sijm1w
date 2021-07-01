import * as debug from 'debug';
import * as React from 'react';

const DetailComponent: (props: IListComponentProps) => React.ReactElement = (
  props: IListComponentProps
) => {
  //mainDebugger('ListComponent function');

  return (
    <div>
      <p>Detalle el que sea </p>
    </div>
  );
};

export { ListComponent };
