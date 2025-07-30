import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
// import env from "./env";

const wallpaperTerms = ["nature", "abstract", "city", "space", "minimal"];
export default async function fetchImages(): Promise<ImagesResults | undefined> {
	const randomTerm = wallpaperTerms[Math.floor(Math.random() * wallpaperTerms.length)];
	const randomPage = Math.floor(Math.random() * 10) + 1;
	const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(randomTerm + " wallpaper")}&per_page=25&page=${randomPage}`;
	try {
		const res = await fetch(url, {
			headers: {
				// Authorization: env.PEXELS_API_KEY,
				Authorization: process.env.PEXELS_API_KEY!,
			},
			cache: "no-store",
		});

		if (!res.ok) throw new Error("Fetch Images error!\n");

		const imagesResults: ImagesResults = await res.json();

		const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);

		if (parsedData.total_results === 0) return undefined;

		return parsedData;
	} catch (e) {
		if (e instanceof Error) console.log(e.stack);
	}
}
