import React from "react";
import Logo from "../assets/images/footerLogo.png";

const Footer = () => {
	return (
		<div>
			{/* ======================== UPPER FOOTER SECTION START ======================= */}
			<div id="leet-footer">
				<div id="leet-footer-cnt">
					<div id="leet-footer-logo">
						<img src={Logo} alt="logo" />
					</div>
					<div class="leet-footer-list">
						<h2>MAIN</h2>
						<h3>
							<a href="main.php">NEWS</a>
						</h3>
						<h3>
							<a href="faq.php">F.A.Q</a>
						</h3>
						<h3>
							<a href="contact.php">CONTACT</a>
						</h3>
					</div>
					<div class="leet-footer-list">
						<h2>CARDS</h2>
						<h3>
							<a href="cards.php">CREDITS CARDS</a>
						</h3>
						<h3>
							<a href="paypal.php">Paypal</a>
						</h3>
						<h3>
							<a href="dumps.php">DUMPS</a>
						</h3>
					</div>
					<a href="dumps.php"></a>
					<div class="leet-footer-list">
						<a href="dumps.php">
							<h2>DEPOSIT</h2>
						</a>
						<h3>
							<a href="dumps.php"></a>
							<a href="topup.php">BITCOINS</a>
						</h3>
						<h3>LITECOIN</h3>
						<h3>ETHEREUM</h3>
						<h3>WEBMONEY</h3>
					</div>
					<div class="leet-footer-list">
						<h2>SHOP</h2>
						<h3>
							<a href="cart.php">CART</a>
						</h3>
						<h3>
							<a href="purchased.php">ORDERS</a>
						</h3>
					</div>
				</div>
			</div>
			{/* ======================== UPPER FOOTER SECTION END ======================= */}

			{/* ======================== BELOW FOOTER SECTION START ======================= */}
			<div id="leet-footer-info">
				<div id="leet-footer-info-cnt">
					<div class="leet-footer-info-item">
						<span class="leet-login-footer-item">
							<strong>
								:: Buy CC :: Sell CC :: CVV :: Dumps :: PayPal :: SSN :: DOB ::
								Full CC INFO :: Bank Logins ::
							</strong>
							Tracks <strong>:: Carder Tools :: Cvv Shop </strong> ::
						</span>
					</div>
					<div class="leet-footer-info-item">CardMafia</div>
				</div>
			</div>
			{/* ======================== BELOW FOOTER SECTION END ======================= */}
		</div>
	);
};

export default Footer;
