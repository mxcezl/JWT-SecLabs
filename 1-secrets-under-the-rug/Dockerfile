# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies inside the container
RUN npm install

# Copy the rest of your app's source code to the working directory
COPY . .

# Make port 3000 available to the outside of the Docker container
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
