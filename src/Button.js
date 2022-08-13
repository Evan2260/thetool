import logo from './logo.svg';
import './button.css'

const Button = (props) =>{
  return(
    <div  className="button">
      <h1>This is the Button component.</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
};

export default Button;
