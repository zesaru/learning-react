import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    //ES LA UNICA OCASION DONDE SE ASIGNA DIRECTAMENTE
    this.state = { lat: null };
  
  window.navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({ lat: position.coords.latitude });
    },
    err => console.log(err)    
  );
  }

  render() {
    return <div>Latitute:{this.state.lat}</div>; 
  }
};

ReactDom.render(<App /> , document.querySelector('#root'))
