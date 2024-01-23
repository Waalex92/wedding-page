import React from "react";
import ContactForm from "../Forms/contact-form";
import Image from "next/image";

function WishBox() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-5">
			<h3 className="font-semibold text-5xl text-blue-900 mb-10">
				Buzón de deseos
			</h3>
			<p className="text-4xl text-blue-300 mb-10">
				Déjanos los mejores deseos en nuestro gran día.
			</p>
			<ContactForm />
			<Image
				src={"/assets/wish.jpg"}
				alt={"Frame 1"}
				width={1200}
				height={1200}
				className="w-auto h-auto rounded-2xl mb-10"
				priority
			/>
		</div>
	);
}

export default WishBox;
