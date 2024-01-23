import React from "react";
import MapButton from "../MapButton/MapButton";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";

function Attendance() {
	return (
		<div className="flex flex-col text-center items-center justify-center m-2">
			<h3 className="font-semibold text-5xl text-blue-900 mb-10">
				Confirma tu asistencia
			</h3>
			<p className="text-4xl text-blue-300 mb-10">
				Tu presencia es importante para nosotros, por favor confirma tu
				asistencia hasta el 15 de Febrero
			</p>
			<div className="flex flex-row mb-10">
				<CiCalendarDate className="inline text-5xl text-blue-400" />
				<MapButton
					link="https://docs.google.com/forms/d/e/1FAIpQLSd64ekhhE6l9hxcjFuzmudNJIrnTAvm8QrqCzU1S4oefGFHnw/viewform?usp=sf_link"
					label="Confirma aquí"
				/>
			</div>
			<p className="text-4xl text-blue-300 mb-10">
				Con mucha ilusión queremos vivir este momento rodeados de
				personas que han formado parte de nuestra historia.
			</p>
			<p className="text-4xl text-blue-300 mb-10">
				Será un honor contar con tu presencia.
			</p>
			<h3 className="font-semibold text-5xl text-blue-900 mb-10">
				¡Te esperamos!
			</h3>
			<Image
				src={"/assets/frame2.jpg"}
				alt={"Frame 1"}
				width={1200}
				height={1200}
				className="w-auto h-auto mb-10 rounded-2xl"
				priority
			/>
		</div>
	);
}

export default Attendance;
