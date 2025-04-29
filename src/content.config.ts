import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const baseSchema = docsSchema();
const extendedSchema = {
	...baseSchema,
	author: z.string().optional(),
	pubDate: z.date().optional(),
	updatedDate: z.date().optional(),
};

export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(), 
		schema: z.object(extendedSchema)
	}),
};
