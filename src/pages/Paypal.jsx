import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Activation from "../components/Activation";
import Searcher from "../components/Searcher";

const Paypal = ({ margins }) => {
	return (
		<div>
			<Navbar>
				<div className={`news_body ${margins}`}>
					<Activation />
					<Searcher />
				</div>
				<Footer />
			</Navbar>
		</div>
	);
};

export default Paypal;
