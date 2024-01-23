"use client";

import CountDown from "@/components/CountDown/CountDown";
import GetMarry from "@/components/GetMarry/GetMarry";
import { Gratitude } from "@/components/Gratitude";
import { Header } from "@/components/Header";
import { TransitionPage } from "@/components/TransitionPage";
import Location from "@/components/Location/Location";
import TimeLine from "@/components/TimeLine/TimeLine";
import WeddingGifts from "@/components/WeddingGifts/WeddingGifts";
import WishBox from "@/components/WishBox/WishBox";
import Attendance from "@/components/Attendance/Attendance";

export default function Home() {
	return (
		<>
			<TransitionPage />
			<main>
				<Header />
				<Gratitude />
				<GetMarry />
				<CountDown />
				<Location />
				<TimeLine />
				<WeddingGifts />
				<WishBox />
				<Attendance />
			</main>
		</>
	);
}
