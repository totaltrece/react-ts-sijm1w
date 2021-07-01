import * as debug from 'debug';
import * as React from 'react';

const MyContext: React.Context<string> = React.createContext('none yet');
MyContext.displayName = 'MyContext';

export { MyContext };
