import { Container } from "../../utils/styles";
import { FooterComponent } from "./Footer.styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { BiWorld } from "react-icons/bi";

const Footer = () => {
	return (
		<FooterComponent>
			<Container>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/tahirahmedt"
							target="_blank"
							rel="noreferrer">
							<FaLinkedin /> LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://www.github.com/ttahm3d"
							target="_blank"
							rel="noreferrer">
							<FaGithub /> Github
						</a>
					</li>
					<li>
						<a
							href="https://blog.tahirahmedt.com/"
							target="_blank"
							rel="noreferrer">
							<SiHashnode /> Blog
						</a>
					</li>
					<li>
						<a
							href="https://www.tahirahmedt.com/"
							target="_blank"
							rel="noreferrer">
							<BiWorld /> Website
						</a>
					</li>
				</ul>
			</Container>
		</FooterComponent>
	);
};

export default Footer;
