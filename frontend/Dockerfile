# Stage 1: build
FROM node:24-alpine as build

WORKDIR /app

# Install bash for react-scripts
RUN apk add --no-cache bash

# Copy package files first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine

# Copy built files to nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
