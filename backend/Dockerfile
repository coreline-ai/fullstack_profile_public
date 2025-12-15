# Base image
FROM node:20-alpine

# Working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port (Backend runs on 4000)
EXPOSE 4000

# Start command
CMD ["npm", "start"]
