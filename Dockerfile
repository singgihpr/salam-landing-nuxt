# Gunakan image Node.js sebagai base image
FROM node:20

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin file .env
COPY .env ./

# Salin sisa kode sumber
COPY . .

# Build aplikasi Nuxt
RUN npm run build

# Expose port aplikasi
EXPOSE 3000

# Jalankan aplikasi Nuxt dalam mode produksi
CMD ["npm", "run", "preview"]