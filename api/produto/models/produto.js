'use strict';
const slugify = require('slugify');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.nome) {
                console.log(data.nome.toLowerCase());
                data.slug = slugify(data.nome.toLowerCase());
            }
        },
        beforeUpdate: async (params, data) => {
            data.slug = slugify(data.nome.toLowerCase());
            
        },
    },
};

