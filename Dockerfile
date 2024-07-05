# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Set the environment variable. production, development, or test
ENV NODE_ENV=development

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Bundle app source
COPY . .

# Next.js collects completely anonymous telemetry data about general usage. 
ENV NEXT_TELEMETRY_DISABLED 1

# Use the custom start script
CMD [ "yarn", "dev" ]
