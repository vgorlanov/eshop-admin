# Eshop admin

### Description
Демонстрационный пример интернет магазина.

Подробное описание https://github.com/vgorlanov/eshop-backend

## Install

```
npm i
```

```
export NGINX_IP=$(hostname -I | awk '{print $1}') && docker-compose up -d
```

```
docker exec eshop-backend cp .env.example .env
```

```
docker exec eshop-backend php artisan indexer:run
```

```
npm run serve
```
