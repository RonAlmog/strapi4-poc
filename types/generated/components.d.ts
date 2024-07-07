import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.buton-link'>;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'gift';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
    icon: 'bulletList';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButonLink extends Schema.Component {
  collectionName: 'components_elements_buton_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'command';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'elements.buton-link'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
    icon: 'expand';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'elements.buton-link': ElementsButonLink;
      'elements.card': ElementsCard;
      'elements.pricing-card': ElementsPricingCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
