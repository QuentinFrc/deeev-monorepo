import { Metadata } from 'next';
import { StaticImageData } from 'next/image';
import { Service as ServiceJSONLD } from 'schema-dts';

type Authors = Array<{ name: string; url: string }>;
type Creator = NonNullable<Metadata['creator']>;
type Publisher = NonNullable<Metadata['publisher']>;

type Founder = {
	role: 'creator' | 'publisher' | 'none';
	name: string;
	job: string;
	email: string;
	socialLinks: string[];
	avatarUrl: string;
	avatarSrc: StaticImageData;
};

type Address = {
	region: string;
	postalCode: string;
	addressCountry: string;
};

type Service = Required<Pick<ServiceJSONLD, 'name' | 'description'>>;

export type SiteConfig = {
	short_name: string;
	alternante_name: string;
	name: string;
	short_description: string;
	long_description: string;
	logo_url: string;
	address: Address;
	authors: Authors;
	creator: Creator;
	publisher: Publisher;
	creationDate: string;
	keywords: string[];
};

export type SiteFounders = Founder[];

export type SiteServices = Service[];

type FAQ = { question: string; answer: string };
export type SiteFAQ = FAQ[];
