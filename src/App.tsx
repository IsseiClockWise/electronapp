import Button from './components/util/Button';
import Checkbox from './components/util/Checkbox';
import TextField from './components/util/TextField';
import React, { FC } from 'react';

interface AppProps{}
const App :FC<AppProps> = ()=>{
  return (
    <div>
      flowchart builder !

      <Button>aaa</Button>  {/* ←追加 */}
      <Checkbox/>  {/* ←追加 */}
      <TextField/>  {/* ←追加 */}
    </div>
  ) ;
};

export default App;
