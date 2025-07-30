"use server";
import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./image-container";
import addBlurredDataUrls from "@/lib/getBase64";

const wallpaperTerms = ["nature", "abstract", "city", "space", "minimal"];

export default async function Gallery() {
	// const randomTerm = wallpaperTerms[Math.floor(Math.random() * wallpaperTerms.length)];
	// const randomPage = Math.floor(Math.random() * 10) + 1;
	// const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(randomTerm + " wallpaper")}&per_page=25&page=${randomPage}`;
	// console.log(url);
	// "https://api.pexels.com/v1/search?query=wallpaper&per_page=25"
	const images: ImagesResults | undefined = await fetchImages();

	if (!images || images.per_page === 0) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;
	const photosWithBlur = await addBlurredDataUrls(images);

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
