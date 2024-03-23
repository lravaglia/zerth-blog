import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../constants';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		...site,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
