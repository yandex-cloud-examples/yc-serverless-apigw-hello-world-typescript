# Typescript Cloud Function Example

Пример интеграции API Gateway и Cloud Functions с использованием контеста операции. 
Контекст операции - это параметр context расширения 
[x-yc-apigateway-integration:cloud_functions](https://cloud.yandex.ru/docs/api-gateway/concepts/extensions/cloud-functions) 
OpenAPI-спецификации. Значение данного параметра может иметь вложенную структуру, но ограничено размером в 2Kbyte. 
Контекст операции позволяет параметризовать функцию-интеграцию для набора типовых операций OpenAPI-спецификации. 
В примере API-гейтвей передает в функцию значение параметра пути запроса `/{name}` через поле
`requestContext.apiGateway.operationContext.name`
[контекста операции](https://cloud.yandex.ru/docs/functions/concepts/function-invoke#request)

## Запуск

1. Выполните `npm install` для установки зависимостей
2. Выполните `npm run build` для сборки проекта
3. Создайте облачную функции, в качестве среды выполнения выберите Node.js и вставьте код из build/index.js
4. Создайте API Gateway и вставьте спецификацию из [openapi-example.yaml](openapi-example.yaml),
   подставив в неё идентификатор ранее созданной функции

Для тестирования откройте в браузере `https://<служебный домен созданного API-шлюза>/world`

## Запуск функции из терминала

1. Выполните `npm install` для установки зависимостей
2. Выполните `npm run build` для сборки проекта
3. Выполните `node build/main <json request> [<json context>]`, передав аргументом json-запрос

## Тесты

    npm run test
