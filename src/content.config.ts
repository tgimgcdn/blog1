import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const baseSchema = docsSchema();

export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(), 
		schema: baseSchema,
		index: true
	}),
};
