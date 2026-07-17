FROM node:22-alpine

# Install Python, C/C++ compiler, Go, Rust, Java
RUN apk add --no-cache python3 make g++ gcc go rust openjdk17-jre openjdk17

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
