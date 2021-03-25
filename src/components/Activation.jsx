import React from "react";

import Coin from "../assets/images/activationCoin.png";

const Activation = () => {
	return (
		<div>
			<div className="leet-central-left">
				<div className="leet-central-left-header-deposit">
					<div className="leet-central-left-header-subtitle-deposit">
						IMPORTANT ( annnqdnqd )
					</div>
					<div className="leet-central-left-header-title-deposit">
						ACCOUNT ACTIVATION REQUIRED
					</div>

					<div className="leet-central-left-header-title-rate">
						1 BTC =<b>55969.2017 </b> USD
					</div>

					<div
						className="leet-central-left-header-point"
						style={{ margin: "10px 0px 0px 0px" }}
					>
						<span>1</span> Greetings friends and welcome to Cardmafia.
					</div>
					<div className="leet-central-left-header-point">
						<span>2</span> Your account is inactive at the moment.
					</div>
					<div className="leet-central-left-header-point">
						<span>3</span> You can't observe available materials and use service
						in full.
					</div>
					<div className="leet-central-left-header-point">
						<span>4</span> Please top up the account for 50$ for activation.
					</div>
					<div className="leet-central-left-header-point">
						<span>5</span> Amount sent will be added to your account balance so
						you can spend it in shop.
					</div>
				</div>

				<div className="leet-central-left-orders-box">
					<table cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td width="75%" className="title" colspan="2">
									BITCOIN DEPOSIT INFORMATION
								</td>
								<td width="25%" className="title">
									QR
								</td>
							</tr>
							<tr>
								<td>
									<span className="big">
										<img src={Coin} width="16" height="16" alt="" />
										BITCOIN ADDRESS
										<img src={Coin} width="16" height="16" alt="" />
									</span>
									<div
										className="reseller-total-income"
										style={{ textTransform: "none" }}
									>
										3BjpKA2mBDP1Xf5vVyh58DpBFy3BAVfDTB &nbsp;
									</div>
									<span className="big">Current Balance</span>
									<div className="big">0 $ &nbsp;</div>
								</td>
								<td width="25%">
									<span>ID</span> #28495&nbsp;
									<span>DATE</span> 2021-03-24&nbsp;<span>STATUS</span>
									Inactive&nbsp;
								</td>
								<td>
									<div>
										<div>
											<img
												src="https://chart.googleapis.com/chart?chs=125&amp;cht=qr&amp;chl=3BjpKA2mBDP1Xf5vVyh58DpBFy3BAVfDTB"
												alt=""
											/>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="leet-central-left-options"></div>
			</div>
		</div>
	);
};

export default Activation;
