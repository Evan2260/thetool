import logo from './logo.svg';
import './button.css'
import ScriptContainer from './ScriptContainer.js'

const Button = (props) =>{

  return(
    <div>
    <a classname="button" href="">
      <h1>Script</h1>
        <img src={logo} className="App-logo" alt="logo" />
        </a>
    </div>
  )
};

export default Button;
