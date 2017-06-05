/*****************************************
  Load Click Dimensions form
*/

const d = document;

const myDiv = document.createElement('div');
myDiv.setAttribute('pageID', esriConfig.formId);
(d.body).appendChild(myDiv);

const myScript = document.createElement('script');
myScript.setAttribute('type','text/javascript');
myScript.setAttribute('src','https://az551914.vo.msecnd.net/web/v10/CDWidget.js');

(d.head || d.body).appendChild(myScript);

const myStyle = document.createElement('link');
myStyle.setAttribute('rel', 'stylesheet');
myStyle.setAttribute('href', 'src/css/esri-form.css');
(d.head).appendChild(myStyle);

/*
  End loding Click Dimensions form
*****************************************/
