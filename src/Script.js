import './button.css'

const Script = ({ psScript }) => {
  let { id, script } = psScript
  return(
    <div className="script">
      <h6>{id}</h6>
      <h5>
        This is the Script Component.
        {script}
      </h5>
    </div>
  )
};

export default Script;
