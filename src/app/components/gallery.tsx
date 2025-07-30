"use server";
import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./image-container";
import addBlurredDataUrls from "@/lib/getBase64";

export default async function Gallery() {
	// let url;
	// if (topic === "curated" && page) {
	// 	// browsing beyond home
	// 	url = `https://api.pexels.com/v1/curated?page=${page}`;
	// } else if (topic === "curated") {
	// 	// home
	// 	url = "https://api.pexels.com/v1/curated";
	// } else if (!page) {
	// 	// 1st page of search results
	// 	url = `https://api.pexels.com/v1/search?query=${topic}`;
	// } else {
	// 	// search result beyond 1st page
	// 	url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
	// }

	const images: ImagesResults | undefined = await fetchImages("https://api.pexels.com/v1/search?query=wallpaper&per_page=25");

	if (!images || images.per_page === 0) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;
	const photosWithBlur = await addBlurredDataUrls(images);
	console.log(photosWithBlur);

	return (
		<>
			<section className="container mx-auto px-1 my-3 grid grid-cols-[var(--grid-gallery)] auto-rows-[10px]">
				{photosWithBlur.map((photo) => (
					<ImgContainer key={photo.id} photo={photo} />
				))}
			</section>
		</>
	);
}
