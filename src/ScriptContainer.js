import Button from './Button.js'
import Script from './Script.js'

const ScriptContainer = (props) => {

  var scriptArray = [
    "script1", "script2", "script3", "script4"
  ];

    const newScriptArray = scriptArray.map((script) => {
      return (
        <Button
          key={script.id}
          psScript={script}
        />
      )
    });
// Create a component called 'Script' that represents a single script.
  return(
    <div>
      <h1>
        This is the ScriptContainer
      </h1>
      <h4>
        {newScriptArray}
      </h4>
    </div>
  )
};

export default ScriptContainer;
