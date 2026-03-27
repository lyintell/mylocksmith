const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
const withBase = (path) => `${assetBase}${path.startsWith('/') ? path : `/${path}`}`;

export const SITE_LOGO_PATH = withBase('/assets/images/branding/logo.png');
export const HOME_HERO_IMAGE_PATH = withBase('/assets/images/hero/home-hero.jpg');

export const CAR_GALLERY_PATHS = [
  withBase('/assets/images/gallery/car/car4.jpg'),
  withBase('/assets/images/gallery/car/car6.jpeg'),
  withBase('/assets/images/gallery/car/car9.jpg'),
  withBase('/assets/images/gallery/car/car12.jpg'),
  withBase('/assets/images/gallery/car/car15.jpg'),
  withBase('/assets/images/gallery/car/car19.jpg'),
  withBase('/assets/images/gallery/car/kit2.jpg'),
  withBase('/assets/images/gallery/car/kit3.jpg'),
];

export const HOME_GALLERY_PATHS = [
  withBase('/assets/images/gallery/home/home2.jpg'),
  withBase('/assets/images/gallery/home/home7.jpg'),
  withBase('/assets/images/gallery/home/home10.jpg'),
  withBase('/assets/images/gallery/home/home13.jpg'),
  withBase('/assets/images/gallery/home/home15.jpg'),
  withBase('/assets/images/gallery/home/home21.jpg'),
];

export const COMMERCIAL_GALLERY_PATHS = [
  withBase('/assets/images/gallery/commercial/commercial-01.jpeg'),
  withBase('/assets/images/gallery/commercial/commercial-05.jpg'),
  withBase('/assets/images/gallery/commercial/commercial-07.jpg'),
  withBase('/assets/images/gallery/commercial/commercial-08.jpg'),
  withBase('/assets/images/gallery/commercial/commercial-09.jpg'),
  withBase('/assets/images/gallery/commercial/commercial-10.jpg'),
  withBase('/assets/images/gallery/commercial/commercial-15.jpg'),
  withBase('/assets/images/gallery/commercial/commercial-17.jpg'),
];