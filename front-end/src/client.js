import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ujsokhwu',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
   token: 'skj8vUpqCjRm9ee7uT7arUdmvHHcL2sEL7ZZivC0TomUyVFMYzsfPH8e6r4xkMU8IXi4WvUsjjQfggsD3ie0WdGFHl21DCh2qfoEi9DzrjTX2X92UBBu7MTftBIAAQCvixTJybTvmAAxyeZCPPciefmclvQ92X1gHMChviaf1hqDqI2QhpkO',
});

const builder = imageUrlBuilder(client);

export const  urlFor = (source) => builder.image(source);