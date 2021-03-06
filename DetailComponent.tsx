import * as debug from 'debug';
import * as React from 'react';
import { useParams } from 'react-router';
import { useCatFacts } from './CustomHookFetch';

import { CustomComponentFetch } from './CustomComponentFetch';

const DetailComponent: (props: any) => React.ReactElement = (props: any) => {
  //mainDebugger('ListComponent function');

  const params = useParams();

  const facts: any = []; // useCatFacts();

  return (
    <div>
      <p>Detalle el que sea {params.id} </p>
      CAT FACTS FROM custom Hook Detail
      {facts.map((element: any) => {
        return (
          <p key={element._id}>
            Fact ({element.user}) <br /> {element.text}
          </p>
        );
      })}
    </div>
  );
};

export { DetailComponent };
