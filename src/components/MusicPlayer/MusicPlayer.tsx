import { useState, useRef } from "react";
import { FaHeart, FaRedo } from "react-icons/fa";

const MusicPlayer: React.FC = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const playPauseHandler = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const restartHandler = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center m-5">
			<div className="flex items-center space-x-4">
				<button
					onClick={playPauseHandler}
					className="bg-slate-300 p-2 rounded-full">
					{isPlaying ? (
						<FaHeart size={24} color="#1D3A8A" />
					) : (
						<FaHeart size={24} color="white" />
					)}
				</button>
				<button
					onClick={restartHandler}
					className="bg-slate-300 p-2 rounded-full">
					<FaRedo size={24} color="white" />
				</button>
			</div>
			<audio ref={audioRef} src="/assets/audio.mp3" className="mt-4" />
		</div>
	);
};

export default MusicPlayer;
