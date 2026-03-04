FROM node:22-alpine

WORKDIR /app

# Asılılıqları yükləyirik
COPY package*.json ./
RUN npm install

# Bütün kodu konteynerə kopyalayırıq
COPY . .

# Vite üçün vacib addım: remoteEntry.js-in yaranması üçün build edirik
RUN npm run build

# Portu kənara açırıq
EXPOSE 5173

# Tətbiqi preview rejimində və Docker şəbəkəsinə açıq (0.0.0.0) şəkildə işə salırıq
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]