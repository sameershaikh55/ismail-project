import React, { useState } from "react";

// IMPORTING IMAGES
import icon1 from "../assets/images/newsIcon.png";
import icon2 from "../assets/images/cardsIcon.png";

import Logo from "../assets/images/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ children }) => {
	const [hamberger, setHamberger] = useState(false);

	return (
		<>
			{/* ========================= UPPER NAVBAR START  ========================== */}
			<div id="leet-header-info">
				<div id="leet-header-info-cnt">
					<div className="logoutBtnC">
						<a href="logout.php">
							<div className="leet-header-info-logout">LOGOUT</div>
						</a>
					</div>
					<div className="leet-header-info-item">
						Welcome <b>annnqdnqd</b>
					</div>
					<div className="leet-header-info-space"></div>
					<div className="leet-header-info-item">
						<b>Last Login :</b> 01:29:16
					</div>
				</div>
			</div>
			{/* ========================= UPPER NAVBAR END  ========================== */}
			{/* ========================= BELOW NAVBAR START  ========================== */}
			<div id="leet-header">
				<div id="leet-header-logo"></div>
				<div id="leet-header-cnt">
					<div id="leet-header-left">
						<div className="leet-header-left-item-icono">
							<img src={icon1} alt="icon" />
						</div>
						<div className="leet-header-left-item">
							<a href="">NEWS</a>
						</div>
						<div className="leet-header-left-item-down-space"></div>
						<div className="leet-header-left-item-icono">
							<img src={icon2} alt="icon" />
						</div>
						<div className="leet-header-left-item-down">
							CARDS
							<div
								className="leet-header-left-item-down-menu"
								style={{ width: "175px" }}
							>
								<div className="leet-header-left-item-down-menu-item">
									<a href="cards.php">CARDS</a>
									<span> 39633 </span>
								</div>
								<div className="leet-header-left-item-down-menu-item">
									<a href="paypal.php">PAYPAL</a>
									<span>13598</span>
								</div>
								<div className="leet-header-left-item-down-menu-item">
									<a href="">DUMPS +PIN</a>
								</div>
								<a href=""></a>
							</div>
							<a href=""></a>
						</div>
					</div>
					<a href=""></a>
					<div id="leet-header-right">
						<a href=""></a>
						<div className="leet-header-right-item-acount">
							<a href="">
								<div className="leet-header-right-item-money-h3">INFO</div>
								<div className="leet-header-right-item-money-h2">ACOUNT</div>
							</a>
							<div
								className="leet-header-right-item-down-menu"
								style={{ width: "140px" }}
							>
								<a href=""></a>
								<div className="leet-header-right-item-down-menu-item">
									<a href=""></a>
									<a href="purchased.php">MY ORDERS</a>
								</div>
								<div className="leet-header-right-item-down-menu-item">
									<a href="">MY INFO</a>
								</div>
							</div>
						</div>
						<div className="leet-header-right-item-down-space"></div>
						<div className="leet-header-right-item-money">
							<div className="leet-header-right-item-money-h3">CASH</div>
							<div className="leet-header-right-item-money-h2">$ 0</div>
							<div
								className="leet-header-right-item-down-menu"
								style={{ width: "130px" }}
							>
								<div className="leet-header-right-item-down-menu-title">
									RELOAD WITH
								</div>
								<div className="leet-header-right-item-down-menu-item">
									<a href="topup.php">BITCOINS</a>
								</div>
								<div className="leet-header-right-item-down-menu-item-disable">
									LITECOIN
								</div>
								<div className="leet-header-right-item-down-menu-item-disable">
									WEBMONEY
								</div>
							</div>
						</div>
						<div className="leet-header-right-item-down-space"></div>
						<div className="leet-header-right-item-cart">
							<a href="cart.php">
								<div className="leet-header-right-item-cart-h3">CART</div>
								<div className="leet-header-right-item-cart-h2">0 ITEM</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* ========================= UPPER NAVBAR END  ========================== */}

			{/* ========================= BELOW NAVBAR START  ========================== */}
			<div className="RLeet_Header">
				<div className="RNavbar">
					<img src={Logo} alt="logo" />
					<GiHamburgerMenu
						className="humberger"
						onClick={() => setHamberger((prev) => !prev)}
					/>
				</div>

				{hamberger && (
					<div
						className="mobilev RLeet_Header"
						style={{
							top: "68px",
							width: "605px",
							right: "0px",
							height: "134px",
						}}
					>
						<div className="leet-header-left-item-icono">
							<img src={icon1} alt="icon" />
						</div>
						<div className="leet-header-left-item">
							<a href="">NEWS</a>
						</div>
						<div className="leet-header-left-item-down-space"></div>
						<div className="leet-header-left-item-icono">
							<img src={icon2} alt="icon" />
						</div>
						<div className="leet-header-left-item-down">
							CARDS
							<div
								className="leet-header-left-item-down-menu"
								style={{ width: "175px" }}
							>
								<div className="leet-header-left-item-down-menu-item">
									<a href="cards.php">CARDS</a>
									<span> 39633 </span>
								</div>
								<div className="leet-header-left-item-down-menu-item">
									<a href="paypal.php">PAYPAL</a>
									<span>13598</span>
								</div>
								<div className="leet-header-left-item-down-menu-item">
									<a href="">DUMPS +PIN</a>
								</div>
								<a href=""></a>
							</div>
							<a href=""></a>
						</div>
						<a href=""></a>
						<a href=""></a>
						<div className="leet-header-right-item-acount">
							<a href="">
								<div className="leet-header-right-item-money-h3">INFO</div>
								<div className="leet-header-right-item-money-h2">ACOUNT</div>
							</a>
							<div
								className="leet-header-right-item-down-menu"
								style={{ width: "140px" }}
							>
								<a href=""></a>
								<div className="leet-header-right-item-down-menu-item">
									<a href=""></a>
									<a href="purchased.php">MY ORDERS</a>
								</div>
								<div className="leet-header-right-item-down-menu-item">
									<a href="">MY INFO</a>
								</div>
							</div>
						</div>
						<div className="leet-header-right-item-down-space"></div>
						<div className="leet-header-right-item-money">
							<div className="leet-header-right-item-money-h3">CASH</div>
							<div className="leet-header-right-item-money-h2">$ 0</div>
							<div
								className="leet-header-right-item-down-menu"
								style={{ width: "130px" }}
							>
								<div className="leet-header-right-item-down-menu-title">
									RELOAD WITH
								</div>
								<div className="leet-header-right-item-down-menu-item">
									<a href="topup.php">BITCOINS</a>
								</div>
								<div className="leet-header-right-item-down-menu-item-disable">
									LITECOIN
								</div>
								<div className="leet-header-right-item-down-menu-item-disable">
									WEBMONEY
								</div>
							</div>
						</div>
						<div className="leet-header-right-item-down-space"></div>
						<div className="leet-header-right-item-cart">
							<a href="cart.php">
								<div className="leet-header-right-item-cart-h3">CART</div>
								<div className="leet-header-right-item-cart-h2">0 ITEM</div>
							</a>
						</div>
					</div>
				)}
			</div>

			{/* ========================= BELOW NAVBAR END  ========================== */}
			{children}
		</>
	);
};

export default Navbar;
