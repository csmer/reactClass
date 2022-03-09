export default function ToFromInputs(props) {
    function formatTo(to) {
      if (typeof to === "string") {
        props.setTo(to.toUpperCase());
      } else {
        props.setTo("");
      }
    }
    return (
      <div>
        <input
          value={props.to}
          onChange={(event) => formatTo(event.target.value)}
        />
      </div>
    );
  }
  