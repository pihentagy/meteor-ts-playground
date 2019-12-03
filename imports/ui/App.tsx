import React from 'react';
import * as UI from './Hello';
import { d } from './boo';
import Info from './Info';
export default () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <div>2 * 2 ={d(2)}</div>
    <UI.Hello />
    <Info />
  </div>
);
