import {useState} from "react";
import styled from "styled-components";
import PasswordContainer from "./components/PasswordContainer";
import {Password} from "./interfaces/Password";

function App() {
	const [password, setPassword] = useState(Password.Initial);

	return (
		<Container>
			<h1 className="heading-medium">Password Generator</h1>
			<Content>
				<PasswordContainer password={password}/>
			</Content>
		</Container>
	);
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 540px;
`;

export default App;
