import styled from "styled-components";
import iconCopyUrl from "../assets/images/icon-copy.svg";
import {copyToClipboard} from "../utils/copyToClipboard";

interface Props {
	password: string;
}

function PasswordContainer({password}: Props) {
	return (
		<Container>
			<h2 className="heading-large">{password}</h2>
			<Button onClick={() => copyToClipboard(password)}>
				<img src={iconCopyUrl} alt="Copy"/>
			</Button>
		</Container>
	);
}

const Container = styled.div`
  width: 100%;
  margin: 32px 0;
  padding: 16px 32px;
  background-color: var(--color-background-lighter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }
`;

export default PasswordContainer;