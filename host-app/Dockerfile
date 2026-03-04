FROM node:22-alpine

WORKDIR /app

# Asılılıqları yükləyirik
COPY package*.json ./
RUN npm install

# Kodu kopyalayırıq
COPY . .

# Portu kənara açırıq
EXPOSE 5174

# Tətbiqi dev rejimində və Docker şəbəkəsinə açıq şəkildə işə salırıq
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5174"]