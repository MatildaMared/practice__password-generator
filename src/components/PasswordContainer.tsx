import styled from "styled-components";
import iconCopyUrl from "../assets/images/icon-copy.svg";

interface Props {
	password: string;
}

function PasswordContainer({password}: Props) {
	return (
		<Container>
			<h2 className="heading-large">{password}</h2>
			<img src={iconCopyUrl} alt="Copy"/>
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

export default PasswordContainer;