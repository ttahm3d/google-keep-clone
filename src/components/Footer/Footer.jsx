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
						<a href="https://www.linkedin.com/in/tahirahmedt" rel="no-referrer">
							<FaLinkedin /> LinkedIn
						</a>
					</li>
					<li>
						<a href="https://www.github.com/ttahm3d" rel="no-referrer">
							<FaGithub /> Github
						</a>
					</li>
					<li>
						<a href="https://blog.tahirahmedt.com/" rel="no-referrer">
							<SiHashnode /> Blog
						</a>
					</li>
					<li>
						<a href="https://www.tahirahmedt.com/" rel="no-referrer">
							<BiWorld /> Website
						</a>
					</li>
				</ul>
			</Container>
		</FooterComponent>
	);
};

export default Footer;
