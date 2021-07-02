import * as debug from 'debug';
import * as React from 'react';

const HocComponent: (props: {}) => React.ReactElement = (props: {}) => {
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
      <h1>Hoc Component </h1>
      {dataState.map((element: any) => {
        return (
          <p key={element._id}>
            Fact ({element.user}) <br /> {element.text}
          </p>
        );
      })}
    </div>
  );
};

type CT = React.ComponentType<Record<string, unknown>>;
const MyHocComponent: (Component: CT) => CT = (Component: CT) => (
  props: Record<string, unknown>
) => {
  console.log('me llaman ====> props MyHocComponent', props);
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

  const newProps = { data: dataState, ...props };
  return <Component {...newProps} />;
};

export { HocComponent, MyHocComponent };
