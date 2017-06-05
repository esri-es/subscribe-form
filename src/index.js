'use strict';

const esriConfig = window.esriConfig || {};
if(esriConfig === {}){
  console.error('esriConfig is not defined!');
}

require('./clickdimensions.js');
