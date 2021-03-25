import React from "react";
import Logo from "../assets/images/footerLogo.png";

const NewFooter = () => {
	return (
		<>
			<div className="container-fluid footer_container">
				<div className="footer_inner my-4">
					<div className="d-flex flex-lg-row flex-md-row justify-content-between">
						<div className="mt-4">
							<img src={Logo} alt="Logo" />
						</div>
						<div className="tog_container">
							<h6>MAIN</h6>
							<ul>
								<li>NEWS</li>
								<li>F.A.Q</li>
								<li>CONTACT</li>
							</ul>
						</div>
						<div className="tog_container">
							<h6>CARDS</h6>
							<ul>
								<li>CREDITS</li>
								<li>CARDS</li>
								<li>PAYPAL</li>
							</ul>
						</div>
						<div className="tog_container">
							<h6>DEPOSITS</h6>
							<ul>
								<li>BITCOINS</li>
								<li>LITCOIN</li>
								<li>ETHEREUM</li>
								<li>WEBMONKEY</li>
							</ul>
						</div>
						<div className="tog_container">
							<h6>SHOP</h6>
							<ul>
								<li>CARTS</li>
								<li>ORDERS</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
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
		</>
	);
};

export default NewFooter;
