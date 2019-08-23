FROM node:12.8-alpine

ENV NODE_ENV=production

RUN apk add --no-cache curl gnupg \
    && mkdir /app \
    && chown -R node:node /app

WORKDIR /app

USER node

RUN touch ~/.profile \
    && curl -o- -L https://yarnpkg.com/install.sh | ash

ENV PATH="/app/node_modules/.bin:$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

COPY --chown=node:node mockrift-com/package.json mockrift-com/yarn.lock /app/
RUN yarn install

COPY --chown=node:node mockrift-com/ /app/

RUN yarn build

CMD ["yarn", "start"]
