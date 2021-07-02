import * as debug from 'debug';
import * as React from 'react';

const CustomComponentFetch: (props: {}) => React.ReactElement = (props: {}) => {
  let initState = [];

  const [dataState, setDataState]: [any, React.Dispatch<any>] = React.useState<
    any
  >(initState);

  React.useEffect(() => {
    /* Peticion que no se cancela */
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(response => response.json())
      .then(data => setDataState(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Custom Component Fetch</h1>
      {dataState.map((element: any) => {
        return (
          <p key={element.user}>
            Fact ({element.user}) <br /> {element.text}
          </p>
        );
      })}
    </div>
  );
};

export { CustomComponentFetch };
