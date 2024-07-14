"use strict";

/**
 * `landing-page-populate` middleware
 */

const populate = {
  populate: {
    metadata: {
      populate: {
        metaImage: {
          populate: true,
          fields: ["name", "alternativeText", "url"],
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query = {
      populate,
      ...ctx.query,
    };
    await next();
  };
};
