import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Products from "./Products"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
            
			<Navbar />

			<Jumbotron />

			<Products />

			<Footer />
		</div>
	);
};

export default Home;