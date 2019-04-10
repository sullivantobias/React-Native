// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import ReplaceText from './ReplaceStateText/replaceStateText';
import FlexDimensions from "./flexDimension/flexDimension";
import Form from "./inputActive/form";


ReactDom.render(<div><ReplaceText/> <FlexDimensions/><Form/></div>, document.getElementById("root"));