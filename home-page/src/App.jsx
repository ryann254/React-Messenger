import React from "react";
import ReactDOM from "react-dom";

import { Container } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";
import Chat from "chat/Chat";

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, nulla
      maiores quidem modi neque consequuntur tempore qui ullam? Voluptatem
      repudiandae harum quo perspiciatis autem laborum aperiam maiores dolor
      nulla, quibusdam exercitationem est quas odio fuga saepe necessitatibus,
      quis, numquam odit!
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsa
      repellendus, quos impedit nemo molestias nulla porro doloribus, dolores at
      mollitia numquam consequatur tempora rem?
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
