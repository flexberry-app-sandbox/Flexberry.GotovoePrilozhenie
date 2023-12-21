docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gotovoe_prilozhenie-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t gotovoe_prilozhenie-java/app ../../..
