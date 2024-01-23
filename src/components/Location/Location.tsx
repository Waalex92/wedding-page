import React from "react";
import Image from "next/image";
import MapButton from "../MapButton/MapButton";
import { SlLocationPin } from "react-icons/sl";

function Location() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-5 mb-10">
			<div className="flex flex-col items-center text-center justify-center text-2xl">
				<Image
					src={"/icons/recepcion.png"}
					alt={"Frame 1"}
					width={1200}
					height={1200}
					className="w-20 h-20 mb-10"
					priority
				/>
				<p className="font-semibold text-5xl mb-10 text-blue-900">
					Recepción
				</p>
				<p className="text-4xl text-blue-300 mb-2">Hora: 18:00 p.m.</p>
				<p className="text-4xl text-blue-300 mb-2">La Orquídea</p>
				<p className="text-4xl text-blue-300 mb-10">
					Av. D'Orbigny 320
				</p>
				<div className="flex flex-row mb-10">
					<SlLocationPin className="inline text-5xl text-blue-400" />
					<MapButton
						link="https://maps.app.goo.gl/C77L7Hq1ZxCoGshSA"
						label="Ver Mapa"
					/>
				</div>
				<Image
					src={"/assets/banner2.jpg"}
					alt={"Frame 1"}
					width={1200}
					height={1200}
					className="w-auto h-auto rounded-2xl mb-10"
					priority
				/>
				<p className="font-semibold text-5xl mb-10 text-blue-900">
					Vestimenta
				</p>
				<p className="text-4xl text-blue-300 mb-10">Semi Formal</p>
				<Image
					src={"/icons/vestimenta.png"}
					alt={"Frame 1"}
					width={1200}
					height={1200}
					className="w-20 h-20 mb-10"
					priority
				/>
				<p className="text-4xl text-blue-300">No usar color blanco</p>
			</div>
		</div>
	);
}

export default Location;
