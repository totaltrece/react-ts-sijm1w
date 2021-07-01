import * as debug from 'debug';
import * as React from 'react';
import { useParams } from 'react-router';

const DetailComponent: (props: any) => React.ReactElement = (props: any) => {
  //mainDebugger('ListComponent function');

  const params = useParams();

  console.log('props', params.id);

  return (
    <div>
      <p>Detalle el que sea {params.id} </p>
    </div>
  );
};

export { DetailComponent };
