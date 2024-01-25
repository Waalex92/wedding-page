import React from "react";
import ContactForm from "../Forms/contact-form";
import Image from "next/image";

function WishBox() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-5">
			<Image
				src={"/assets/wish1.jpeg"}
				alt={"wish"}
				width={1200}
				height={1200}
				className="w-auto h-auto rounded-2xl mb-10"
				priority
			/>
			{/* 
			<h3 className="font-semibold text-5xl text-blue-900 mb-10">
				Buzón de deseos
			</h3>
			<p className="text-4xl text-blue-300 mb-10">
				Déjanos los mejores deseos en nuestro gran día.
			</p>
			<ContactForm />
			*/}
		</div>
	);
}

export default WishBox;
