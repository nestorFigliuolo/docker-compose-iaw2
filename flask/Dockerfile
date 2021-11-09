FROM python:3.10.0-alpine3.14

WORKDIR /app
RUN pip install --no-cache-dir Flask

COPY . .

ENV FLASH_APP=server

CMD flask run --host=0.0.0.0