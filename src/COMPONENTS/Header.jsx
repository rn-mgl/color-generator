import React from "react";

function Header(props) {
  return (
    <div className="header">
      <form
        className={props.error ? "error" : null}
        onSubmit={props.handleSubmit}
      >
        <label className="label form" htmlFor="color">
          Color Generator
        </label>
        <input
          name="color"
          id="color"
          spellCheck="false"
          onChange={props.changeColorValue}
          placeholder="#123456"
          className="input form"
        />
        <button className="generate-btn form">Generate</button>
      </form>
    </div>
  );
}

export default Header;
