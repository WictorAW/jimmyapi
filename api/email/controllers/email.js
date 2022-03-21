'use strict';

const {parseMultipartData, sanitizeEntity} = require('strapi-utils')

module.exports = {

    async create(ctx) {
        let entity;

        if(ctx.is('multipart')){
            const {data, files} = parseMultipartData(ctx);

            entity = await strapi.services.email.create(data, {files});

        }else {
            entity = await strapi.services.email.create(ctx.request.body);

        }
        
        return sanitizeEntity(entity, {model: strapi.models.email})
    }
};
