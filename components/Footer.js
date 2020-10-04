import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => (
	<div className="footer">
		<div className="footer-text">
			<p> <a href="https://dev-cordenadas.xyz/" target="_blank" rel="noopener noreferrer">© DevCordenadas</a> 2020</p>
			<p className="text-gray text-center">Web creada en NextJs y con WooCommerce</p>
			<span className="text-gray">Siguenos en las redes sociales para estar al día</span>
		</div>
		<ul className="social-links">
			<li>
				<a href="https://www.instagram.com/myjsoap/" target="_blank" className="fa-facebook">
					<h3>
						<FaInstagram />
					</h3>
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/myjsoaps/" target="_blank" className="fa-facebook">
					<h3>
						<FaFacebookF />
					</h3>
				</a>
			</li>
		</ul>
	</div>
);

export default Footer;
