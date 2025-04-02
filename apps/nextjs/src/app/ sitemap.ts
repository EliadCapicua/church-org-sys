import type { MetadataRoute } from "next";
const baseURL = "https://www.iafcj.co";
const makeURL = (path: string, priority: number) => ({
	url: new URL(path, baseURL).toString(),
	lastModified: new Date(),
	changeFrequency: "daily" as const,
	priority,
});
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		// home
		makeURL("/home", 1),
		// locations
		makeURL("/locations", 0.7),
	];
}
