import * as debug from 'debug';
import * as React from 'react';

function useCatFacts() {

  console.log("se llama a getCatFacts");
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

  return dataState;

};

export { useCatFacts };
