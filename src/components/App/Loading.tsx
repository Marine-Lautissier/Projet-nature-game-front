import React from "react";
import { Icon } from "semantic-ui-react";

function Loading() {
  return (
    <div style={{ color: "green", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Icon.Group size='huge'>
        <Icon loading size='big' name='paw' />
      </Icon.Group>
      <div className="loading">Veuillez patienter</div>
    </div>
  );
}

export default Loading;
