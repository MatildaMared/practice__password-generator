import {useState} from "react";
import styled from "styled-components";

function App() {

	return (
		<Container>
			<h1 className="heading-medium">Password Generator</h1>
		</Container>
	);
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
