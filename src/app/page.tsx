"use client";
import Image from "next/image";
import { Phone, Mail, MapPin, Search } from "lucide-react";

const wallpapers = [
	{
		id: 1,
		name: "Flying through glow blue futuristic digital technology landscape. Glow colourful particle background",
		price: "£34/m²",
		image: "1.jpg",
	},
	{ id: 2, name: "Underwater Dream VI", price: "£34/m²", image: "2.jpg" },
	{ id: 3, name: "Elegant Flight", price: "£34/m²", image: "3.jpg" },
	{ id: 4, name: "Blurred", price: "£34/m²", image: "4.jpg" },
	{ id: 5, name: "Intangible", price: "£34/m²", image: "5.jpg" },
	{ id: 6, name: "Yellow Light", price: "£34/m²", image: "6.jpg" },
	{ id: 7, name: "Colourful Garden", price: "£34/m²", image: "7.jpg" },
	{ id: 8, name: "Angular Shapes", price: "£34/m²", image: "8.jpg" },
	{ id: 9, name: "Colourful Ink in Water", price: "£34/m²", image: "9.jpg" },
	{ id: 10, name: "Avenues", price: "£34/m²", image: "10.jpg" },
];

export default function Gallery() {
	return (
		<div className="min-h-screen bg-white">
			{/* Sticky Header */}
			<header className="bg-white border-b sticky top-0 z-50">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between py-4">
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-black rounded flex items-center justify-center">
								<div className="w-6 h-6 bg-white rounded"></div>
							</div>
							<span className="font-bold text-black text-xl">WALLPRINTZ</span>
						</div>

						<nav className="hidden md:flex space-x-8">
							<a href="#" className="text-gray-700 hover:text-blue-600">
								Home
							</a>
							<a href="#" className="text-blue-600 font-medium">
								Explore Wallpaper
							</a>
							<a href="#" className="text-gray-700 hover:text-blue-600">
								About Us
							</a>
							<a href="#" className="text-gray-700 hover:text-blue-600">
								How To Order
							</a>
							<a href="#" className="text-gray-700 hover:text-blue-600">
								How to Install
							</a>
							<a href="#" className="text-gray-700 hover:text-blue-600">
								Tutorials
							</a>
						</nav>

						<div className="flex items-center space-x-4">
							<div className="flex items-center space-x-2">
								<div className="relative">
									<input
										type="text"
										placeholder="Another wallpaper"
										className="pl-4 pr-10 py-2 border rounded-lg text-sm w-48"
									/>
									<Search className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
								</div>
								<button className="bg-black text-white p-2 rounded">
									<Search className="w-4 h-4" />
								</button>
							</div>
							<div className="flex items-center space-x-2">
								<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
									<Phone className="w-3 h-3 text-white" />
								</div>
								<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
									<Mail className="w-3 h-3 text-white" />
								</div>
								<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
									<MapPin className="w-3 h-3 text-white" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Announcement Bar */}
				<div className="bg-blue-100 py-2 px-4 text-center text-sm">
					<span className="text-blue-800">
						Unbeatable Prices on Custom Wallpaper with our Best Price Guarantee. We&apos;ll Match or Beat All The Rest!
					</span>
				</div>
			</header>

			{/* Wallsauce branding bar */}
			<div className="bg-black text-white py-3">
				<div className="container mx-auto px-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="text-xl font-bold">Wallsauce</div>
						<span className="text-sm text-gray-300">Premium Wallpaper Murals & Prints</span>
					</div>
					<div className="flex items-center space-x-4 text-sm">
						<div className="flex items-center space-x-1">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
							<span>4,150 reviews</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="w-4 h-4 bg-red-600 rounded"></div>
							<div className="w-4 h-4 bg-blue-600 rounded"></div>
							<div className="w-4 h-4 bg-green-600 rounded"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Navigation tabs */}
			<div className="bg-gray-100 py-4">
				<div className="container mx-auto px-4">
					<div className="flex space-x-8 text-sm font-medium">
						<a href="#" className="text-gray-900 border-b-2 border-black pb-1">
							WALLPAPER MURALS
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							PRINTS & POSTERS
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							YOUR IMAGE
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							COMMERCIAL
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							IDEAS
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							HELP
						</a>
					</div>
				</div>
			</div>

			{/* Wallpaper Gallery Grid */}
			<main className="py-8">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
						{wallpapers.map((wallpaper) => (
							<div key={wallpaper.id} className="group cursor-pointer">
								<div className="relative overflow-hidden">
									{/* Room mockup image */}
									<div className="relative aspect-[4/3] bg-gray-200">
										<Image
											src={`/assets/${wallpaper.image}`}
											alt={wallpaper.name}
											fill
											className="object-cover"
											onError={(e) => {
												if ("src" in e.target) {
													e.target.src =
														"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE3NSIgeT0iMTI1IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+";
												}
											}}
										/>

										{/* Heart icon */}
										<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
											<svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={1.5}
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
										</button>

										{/* Sample watermark */}
										<div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-600">
											SAMPLE
										</div>
									</div>

									{/* Product info */}
									<div className="p-4">
										<h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{wallpaper.name}</h3>
										<p className="text-sm text-gray-600">
											Price from: <span className="font-medium">{wallpaper.price}</span>
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12 mt-16">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-8 bg-black rounded flex items-center justify-center">
									<div className="w-6 h-6 bg-white rounded"></div>
								</div>
								<span className="font-bold text-xl">DERBY</span>
								<span className="font-bold text-xl">WALLPRINTZ</span>
							</div>
							<p className="text-gray-400 text-sm mb-4">
								Whether you want a modern mural or a more rustic vintage-themed, you can trust us to create a lasting finish on
								any walls anywhere in your home. Our aim-to-please aesthetic and durable materials are both that you expect from
								us.
							</p>
							<h4 className="font-bold mb-2">FOLLOW US</h4>
							<div className="flex space-x-4">
								<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
								<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
								<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
							</div>
						</div>

						<div>
							<h4 className="font-bold mb-4">SHORTCUTS</h4>
							<ul className="space-y-2 text-sm text-gray-400">
								<li>
									<a href="#" className="hover:text-white">
										About Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Gallery
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Services
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										How to Install
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Materials
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-bold mb-4">CUSTOMER SERVICE</h4>
							<ul className="space-y-2 text-sm text-gray-400">
								<li>
									<a href="#" className="hover:text-white">
										Privacy and Accessibility
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Contact
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Returns and Refunds
									</a>
								</li>
							</ul>
						</div>

						<div>
							<div className="bg-gray-400 h-32 rounded mb-4"></div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
