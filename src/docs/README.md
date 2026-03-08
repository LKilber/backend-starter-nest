Para subir apenas a infraestrutura (Postgres + Redis), sem buildar a aplicação:
docker compose -f src/infrastructure/docker-compose.yml up postgres redis -d

Para subir tudo (incluindo api e worker):
docker compose -f src/infrastructure/docker-compose.yml up -d

Para parar:
docker compose -f src/infrastructure/docker-compose.yml down

Para rebuildar as imagens
docker compose -f src/infrastructure/docker-compose.yml up --build -d