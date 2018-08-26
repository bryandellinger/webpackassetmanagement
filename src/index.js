import _ from 'lodash';
import './style.css';
import Icon from './jasmine_favicon.png';
import Data from './data.xml';

function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello'); 
     // Add the image to our existing div.
     var myIcon = new Image();
     myIcon.src = Icon;

     console.log(Data);

    element.appendChild(myIcon);
    return element;
  }


  
  document.body.appendChild(component());