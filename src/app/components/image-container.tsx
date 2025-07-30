import type { Photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";

type Props = {
	photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
	const widthHeightRatio = photo.height / photo.width;
	const galleryHeight = Math.ceil(375 * widthHeightRatio);
	const photoSpans = Math.ceil(galleryHeight / 10) + 1;

	return (
		<div className="w-[375px] justify-self-center relative" style={{ gridRow: `span ${photoSpans}` }}>
			<Link href="/detail" className="grid place-content-center relative">
				<div className="rounded-md overflow-hidden">
					<Image
						src={photo.src.large}
						alt={photo.alt}
						width={photo.width}
						height={photo.height}
						sizes="375px"
						placeholder="blur"
						blurDataURL={photo.blurredDataUrl}
					/>
				</div>
				<div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-800">SAMPLE</div>
			</Link>
			<div className="absolute top-3 left-3">
				<h3 className="font-bold text-white line-clamp-1 text-shadow-xl">Underwater Dream IV</h3>
				<p className="font-semibold text-sm text-white text-shadow-xl">Price from: £34/m2</p>
			</div>
			<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm transition-opacity cursor-pointer">
				<svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>
		</div>
	);
}
