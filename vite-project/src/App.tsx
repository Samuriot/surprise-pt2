import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [noPosition, setNoPosition] = useState<{
		x: number;
		y: number;
	} | null>(null);
	const [yesScale, setYesScale] = useState(1);
	const [noScale, setNoScale] = useState(1);
	const [yesClicked, setYesClicked] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleNoClick = () => {
		if (!isMobile) {
			const randomX = Math.random() * (window.innerWidth - 120);
			const randomY = Math.random() * (window.innerHeight - 120);
			setNoPosition({ x: randomX, y: randomY });
		}
		setYesScale((prev) => prev + 0.2);
		setNoScale((prev) => Math.max(prev - 0.1, 0.5));
	};

	const handleYesClick = () => {
		setYesClicked(true);
	};

	return (
		<>
			<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-4 overflow-y-auto">
				{yesClicked ? (
					<Card className="w-full max-w-md shadow-xl">
						<CardHeader className="text-center py-3 md:py-6">
							<CardTitle className="text-2xl md:text-4xl font-light text-rose-900 mb-1 md:mb-2">
								YAYYYYYYYYY
							</CardTitle>
							<CardDescription className="text-sm md:text-lg text-rose-700">
								<p>i'm so happy u didn't say no</p>
								<span className="text-xs">
									(aka you couldn't lel)
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent className="text-center py-4 md:py-8 px-3 md:px-6">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4">
								<img
									src={img1}
									alt="memory 1"
									className="w-full rounded-lg shadow-md object-cover h-48 md:h-40 hover:shadow-lg transition-shadow"
								/>
								<img
									src={img2}
									alt="memory 2"
									className="w-full rounded-lg shadow-md object-cover h-32 md:h-40 hover:shadow-lg transition-shadow"
								/>
								<img
									src={img3}
									alt="memory 3"
									className="w-full rounded-lg shadow-md object-cover h-32 md:h-40 hover:shadow-lg transition-shadow"
								/>
							</div>
							<p className="text-gray-700 text-sm md:text-base leading-relaxed">
								i can't wait to see you here in march bubs{" "}
								{"<3"}
							</p>
						</CardContent>
						<CardFooter className="justify-center py-2 md:py-4 px-3 md:px-6 border-t border-rose-200">
							<p className="text-xs md:text-sm text-gray-600">
								i miss u 10 billion + infinity + 2 (i win)
							</p>
						</CardFooter>
					</Card>
				) : (
					<Card className="w-full max-w-md shadow-xl overflow-hidden">
						<CardHeader className="text-center py-2 md:py-6">
							<CardTitle className="text-lg md:text-3xl font-light text-gray-900">
								Will you be my valentine?
							</CardTitle>
						</CardHeader>
						<CardContent className="p-0">
							<img
								src="https://www.americanmeadows.com/cdn/shop/files/blue-hydrangea-1800x1200-8a5c7a6b-554f-4ca5-8a5f-87ac1991cfc4_dt.jpg?v=1763746106"
								alt="Blue hydrangeas"
								className="w-full h-32 md:h-64 object-cover"
							/>
						</CardContent>
						<CardFooter className="flex gap-2 justify-center p-2 md:p-6">
							<Button
								size={isMobile ? "default" : "xl"}
								onClick={handleYesClick}
								style={{
									transform: `scale(${yesScale})`,
									transformOrigin: "center",
								}}
								className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 md:px-6"
							>
								Yes
							</Button>
							<Button
								size={isMobile ? "default" : "xl"}
								onClick={handleNoClick}
								style={
									!isMobile && noPosition
										? {
												position: "fixed",
												left: `${noPosition.x}px`,
												top: `${noPosition.y}px`,
												transition:
													"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
												transform: `scale(${noScale})`,
												transformOrigin: "center",
											}
										: {
												transform: `scale(${noScale})`,
												transformOrigin: "center",
											}
								}
								className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-4 md:px-6"
							>
								No
							</Button>
						</CardFooter>
					</Card>
				)}
			</div>
		</>
	);
}

export default App;
