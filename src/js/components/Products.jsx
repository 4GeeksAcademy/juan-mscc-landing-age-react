import React from "react";
import Card from "./Card";

const cards = [
	{
		image: "https://picsum.photos/200/200",
		title: "Titulo",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
	{
		image: "https://picsum.photos/200/200",
		title: "Titulo",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
	{
		image: "https://picsum.photos/200/200",
		title: "Titulo",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
	{
		image: "https://picsum.photos/200/200",
		title: "Titulo",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	}
];

const Products = () => {
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                {cards.map((item, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <Card cards={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;