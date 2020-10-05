FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json tsconfig.json tsconfig.build.json .env* ./
COPY src/ src/
RUN npm install
RUN npm run build
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]