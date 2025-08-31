# Use official Node.js LTS version image as base
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire app source code into container
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the application
CMD ["node", "src/server.js"]
