// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import ReplaceText from './ReplaceStateText/replaceStateText';
import Form from "./inputActive/form";

ReactDom.render(<div><ReplaceText/><Form/></div>, document.getElementById("root"));