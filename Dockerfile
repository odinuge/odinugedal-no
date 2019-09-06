FROM node:12 as builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

# Copying source files
COPY . .
RUN yarn build


FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app/.next/ /app/.next
COPY --from=builder /app/index.js /app/
# Running the app
CMD [ "node", "index.js" ]
