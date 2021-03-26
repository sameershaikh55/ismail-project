import React from "react";
import Common from "../components/common";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import Searcher from "../components/Searcher";

const News = () => {
	return (
		<div>
			<Navbar>
				<div className="news_body">
					<Common />
					<Searcher />
				</div>
				<NewFooter />
			</Navbar>
		</div>
	);
};

export default News;
