import React from "react";
import { Card } from "react-bootstrap";
import logo from "../img/logo_transparent.png";
function Noticia() {
  return (
    <Card className="mt-5 align-left" style={{ width: "23rem", backgroundColor: '#EDE7D9', top:'3%', left:"15%" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={logo} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Noticia;
