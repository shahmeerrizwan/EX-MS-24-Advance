import React from 'react';
import Todo from './Todo/Todo';
import  GetData  from './Firebase/GetData';

function App() {
  return (
    <>
     <Todo/>
     <GetData />
    </>
  );
}

export default App;
