import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const baseSchema = docsSchema();
const extendedSchema = {
	...baseSchema,
	author: z.string().optional(),
	pubDate: z.string().transform((str) => new Date(str)).optional(),
	updatedDate: z.string().transform((str) => new Date(str)).optional(),
};

export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(), 
		schema: z.object(extendedSchema)
	}),
};
