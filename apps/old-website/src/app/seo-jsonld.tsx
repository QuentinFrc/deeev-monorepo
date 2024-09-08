import React from 'react';
import { Config, FAQ, Founders, Services } from '@/config';
import { FAQPage, Organization, Person, Service, WebSite } from 'schema-dts';

import {
	APP_URL,
	BEHANCE_LINK,
	CONTACT_EMAIL,
	INSTAGRAM_LINK,
	LINKEDIN_LINK,
} from '@/config/env';
import { JsonLd } from '@ui/components/seo/json-ld';

export const RootJsonLd = () => {
	const FoundersJsonLd: Person[] = Founders.map((founder, index) => ({
		'@context': 'https://schema.org',
		'@id': `${APP_URL}/#founder${index}`,
		'@type': 'Person',
		name: founder.name,
		jobTitle: founder.job,
		email: founder.email,
		worksFor: {
			'@id': `${APP_URL}/#organization`,
		},
		sameAs: founder.socialLinks,
		image: founder.avatarUrl,
	}));
	const OrganizationJsonLd: Organization = {
		'@id': `${APP_URL}/#organization`,
		'@type': 'Organization',
		name: Config.short_name,
		alternateName: Config.alternante_name,
		description: Config.long_description,
		url: APP_URL,
		logo: Config.logo_url,
		email: CONTACT_EMAIL,
		contactPoint: [
			{
				'@type': 'ContactPoint',
				email: CONTACT_EMAIL,
			},
		],
		address: {
			'@type': 'PostalAddress',
			...Config.address,
		},
		numberOfEmployees: {
			'@type': 'QuantitativeValue',
			value: 3,
		},
		foundingDate: Config.creationDate,
		founder: FoundersJsonLd,
		keywords: Config.keywords,
		sameAs: [LINKEDIN_LINK, INSTAGRAM_LINK, BEHANCE_LINK],
	} as const;
	const ServicesJsonLd: Service[] = Services.map((service) => ({
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: service.name,
		description: service.description,
		provider: {
			'@id': `${APP_URL}/#organization`,
		},
	}));
	return <JsonLd data={[OrganizationJsonLd, ...ServicesJsonLd]} />;
};

export const HomeJsonLd = () => {
	const WebsiteJsonLd: WebSite = {
		'@type': 'WebSite',
		name: Config.short_name,
		url: APP_URL,
		description: Config.long_description,
		publisher: {
			'@id': `${APP_URL}/#organization`,
		},
		creator: {
			'@id': `${APP_URL}/#organization`,
		},
		inLanguage: 'fr-FR',
		dateCreated: Config.creationDate,
		dateModified: new Date().toISOString(),
	};
	const FAQJsonLd: FAQPage = {
		'@type': 'FAQPage',
		mainEntity: FAQ.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
	return <JsonLd data={[FAQJsonLd, WebsiteJsonLd]} />;
};
