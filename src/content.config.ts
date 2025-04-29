import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(), 
		schema: docsSchema().extend({
			author: z.string().optional(),
			pubDate: z.date().optional(),
			updatedDate: z.date().optional(),
		})
	}),
};
