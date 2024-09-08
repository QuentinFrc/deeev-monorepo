import { MetadataRoute } from 'next';

import { manifest as NextManifest } from '@/config/next-metadata';

const manifest: () => MetadataRoute.Manifest = () => NextManifest;

export default manifest;
