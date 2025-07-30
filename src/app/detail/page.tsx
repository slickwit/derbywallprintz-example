import { ChevronLeft, ChevronRight, Star, Heart, Share2, Download } from "lucide-react";

export default function WallpaperProductPage() {
	const relatedImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];

	return (
		<>
			{/* Product Section */}
			<div className="container mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Image Gallery */}
					<div className="space-y-4">
						{/* Main Image */}
						<div className="relative aspect-[4/3] bg-gray-400 rounded-lg overflow-hidden">
							<button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 z-10">
								<ChevronLeft className="w-5 h-5" />
							</button>
							<button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 z-10">
								<ChevronRight className="w-5 h-5" />
							</button>

							{/* Image dots indicator */}
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
								{[...Array(5)].map((_, i) => (
									<div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}></div>
								))}
							</div>
						</div>

						{/* Close-up image */}
						<div className="aspect-square bg-gray-400 rounded-lg max-w-sm"></div>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						<div>
							<h1 className="text-3xl font-bold mb-2">Underwater Dream IV</h1>
							<p className="text-xl text-blue-600 font-semibold">Price from £34/m²</p>
						</div>

						{/* Actions */}
						<div className="flex space-x-4">
							<button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
								<Heart className="w-5 h-5" />
								<span>Save to wishlist</span>
							</button>
							<button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
								<Share2 className="w-5 h-5" />
								<span>Share this design</span>
							</button>
						</div>

						{/* Customization */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg">CHOOSE DIMENSIONS</h3>

							<div className="space-y-3">
								<div>
									<label className="block text-sm text-gray-600 mb-1">Height (cm)</label>
									<input type="number" className="w-full border rounded-lg px-3 py-2" placeholder="Enter height" />
								</div>
								<div>
									<label className="block text-sm text-gray-600 mb-1">Width (cm)</label>
									<input type="number" className="w-full border rounded-lg px-3 py-2" placeholder="Enter width" />
								</div>
								<div className="flex items-center space-x-2">
									<input type="checkbox" id="ratio" className="rounded" />
									<label htmlFor="ratio" className="text-sm">
										Lock ratio
									</label>
								</div>
							</div>
						</div>

						{/* Material Selection */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg">SELECT MATERIAL</h3>
							<div className="grid grid-cols-2 gap-3">
								<button className="border-2 border-blue-600 bg-blue-50 rounded-lg p-4 text-left">
									<div className="font-medium">Paste</div>
									<div className="text-sm text-gray-600">Premium Wallpaper</div>
									<div className="text-sm font-semibold text-blue-600 mt-1">£34/m²</div>
								</button>
								<button className="border rounded-lg p-4 text-left hover:border-gray-400">
									<div className="font-medium">Peel & Stick</div>
									<div className="text-sm text-gray-600">Self-adhesive</div>
									<div className="text-sm font-semibold mt-1">£42/m²</div>
								</button>
							</div>
						</div>

						{/* Add to Cart */}
						<button className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600">
							ORDER A SAMPLE
						</button>

						<div className="flex space-x-4">
							<button className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">BUY IT NOW</button>
							<button className="flex-1 border border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-50">
								ADD TO BASKET
							</button>
						</div>

						{/* Product Details */}
						<div className="space-y-4 pt-6 border-t">
							<div className="flex items-center space-x-4">
								<div className="w-8 h-8 bg-gray-200 rounded"></div>
								<div className="w-8 h-8 bg-gray-200 rounded"></div>
								<div className="w-8 h-8 bg-gray-200 rounded"></div>
								<div className="w-8 h-8 bg-gray-200 rounded"></div>
							</div>

							<p className="text-sm text-gray-600">
								This design works as both mural wallpaper and wall stickers. Paste wallpaper is easier to reposition and takes
								longer to dry, so you can ensure your wall is perfect.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* You May Also Like */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{relatedImages.map((image, index) => (
							<div key={index} className="aspect-square bg-gray-400 rounded-lg"></div>
						))}
					</div>
				</div>
			</section>

			{/* Product Tags */}
			<section className="py-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap gap-2">
						{[
							"WALLPAPER MURALS",
							"PASTE WALLPAPER",
							"ABSTRACT WALLPAPER",
							"BLUE WALLPAPER",
							"KIDS WALLPAPER",
							"FEATURE WALLPAPER",
							"NURSERY WALLPAPER",
						].map((tag) => (
							<span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
								{tag}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* More Details */}
			<section className="py-12">
				<div className="container mx-auto px-4 max-w-4xl">
					<h2 className="text-2xl font-bold mb-6">MORE DETAILS</h2>

					<div className="space-y-8">
						<div>
							<h3 className="font-semibold text-lg mb-3">Underwater Dream IV - Ocean Wallpaper Mural</h3>
							<p className="text-gray-600 leading-relaxed">
								Dive deep into the depths of the ocean with this stunning underwater wallpaper. The mysterious deep blue creates
								an amazing focal point...
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg mb-3">FEATURES</h3>
							<ul className="text-gray-600 space-y-1">
								<li>• Made to measure</li>
								<li>• Fire safety approved</li>
								<li>• Environmentally friendly</li>
								<li>• Removable</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold text-lg mb-3">DELIVERY</h3>
							<p className="text-gray-600">FREE UK delivery within 3 – 5 business days</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg mb-3">INSTALLATION</h3>
							<div className="flex space-x-4">
								<div className="bg-red-100 p-3 rounded">
									<Download className="w-6 h-6 text-red-600 mb-2" />
									<p className="text-sm">Download the installation guide for Classic Tessarae and Anlass here.</p>
								</div>
								<div className="bg-red-100 p-3 rounded">
									<Download className="w-6 h-6 text-red-600 mb-2" />
									<p className="text-sm">Download the installation guide for Peel & Stick Tessarae here.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Reviews */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold">PRODUCT REVIEWS</h2>
						<div className="flex items-center space-x-2">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
								))}
							</div>
							<span className="font-semibold">4.9 stars</span>
						</div>
					</div>

					<div className="space-y-6">
						{[
							{
								name: "Amazing quality",
								rating: 5,
								text: "Great product, fast delivery and excellent quality. Would definitely recommend!",
							},
							{
								name: "Love it!",
								rating: 5,
								text: "Perfect for my bedroom. The colors are vibrant and the material feels premium.",
							},
							{
								name: "Excellent service",
								rating: 5,
								text: "Customer service was helpful and the installation guide was very clear.",
							},
						].map((review, index) => (
							<div key={index} className="bg-white p-6 rounded-lg">
								<div className="flex items-center justify-between mb-3">
									<h4 className="font-semibold">{review.name}</h4>
									<div className="flex">
										{[...Array(review.rating)].map((_, i) => (
											<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
										))}
									</div>
								</div>
								<p className="text-gray-600">{review.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
