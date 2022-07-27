import React from "react";

function Colors(props) {
  const [copy, setCopy] = React.useState(false);

  React.useEffect(() => {
    const time = setTimeout(() => {
      setCopy(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [copy]);

  function copyHex() {
    setCopy(true);
    navigator.clipboard.writeText(props.hex);
  }

  const rgb = props.rgb.join(",");

  const currClass = `color-card ${props.class}`;

  const newStyle = {
    background: `rgb(${rgb})`,
  };

  return (
    <div onClick={copyHex} style={newStyle} className={currClass}>
      <div className="weight-value">{props.weight}%</div>
      <div className="hex-value">{props.hex}</div>
      {copy && <div className="copied">Copied to clipdboard</div>}
    </div>
  );
}

export default Colors;
