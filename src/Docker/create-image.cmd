docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gotovoe_prilozhenie/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t gotovoe_prilozhenie/app ../..
