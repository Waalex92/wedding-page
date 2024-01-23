import { useInterval } from "usehooks-ts";
import { useEffect, useState } from "react";
import { timeLeft } from "@/utils/utils";

function CountDown() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const target = new Date("02/17/2024 18:00:00");

		const interval = setInterval(() => {
			const now = new Date();
			const difference = target.getTime() - now.getTime();

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHours(h);

			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);

			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="flex flex-col mb-10">
			<div className="text-center flex-1 text-blue-900">
				<section className="grid grid-cols-4 gap-3 p-4">
					<div className="bg-sky-100 rounded p-3 md:p-10 flex flex-col items-center text-2xl font-semibold">
						{days}
						<p className="text-xl">Días</p>
					</div>
					<div className="bg-sky-100 rounded p-3 md:p-10 flex flex-col items-center text-2xl font-semibold">
						{hours}
						<p className="text-xl">Horas</p>
					</div>
					<div className="bg-sky-100 rounded p-3 md:p-10 flex flex-col items-center text-2xl font-semibold">
						{minutes}
						<p className="text-xl">Minutos</p>
					</div>
					<div className="bg-sky-100 rounded p-3 md:p-10 flex flex-col items-center text-2xl font-semibold">
						{seconds}
						<p className="text-xl">Segundos</p>
					</div>
				</section>
			</div>
		</div>
	);
}
export default CountDown;
