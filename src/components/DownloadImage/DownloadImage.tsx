import React from "react";
import { IoGiftOutline } from "react-icons/io5";

const ImageDownloader = () => {
	const downloadImage = () => {
		const imageSrc = "/image.jpeg";
		const link = document.createElement("a");
		link.href = imageSrc;
		link.download = "downloaded_image.jpeg";
		link.click();
	};

	return (
		<div className="mb-10">
			<button
				className="bg-sky-100 hover:bg-secondary-50 p-2 rounded-3xl"
				onClick={downloadImage}>
				<IoGiftOutline className="inline text-5xl text-blue-400" />
			</button>
		</div>
	);
};

export default ImageDownloader;
