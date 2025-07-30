import Gallery from "./components/gallery";

export default function Home() {
	return (
		<>
			{/* Breadcrumb */}
			<div className="bg-gray-50 py-2">
				<div className="container mx-auto px-4">
					<div className="text-sm text-gray-600">
						<a href="#" className="hover:text-blue-600">
							Home
						</a>{" "}
						/
						<a href="#" className="hover:text-blue-600">
							{" "}
							Wallpaper Murals
						</a>{" "}
						/<span className="text-gray-900"> Underwater Dream IV</span>
					</div>
				</div>
			</div>
			<Gallery />
		</>
	);
}
