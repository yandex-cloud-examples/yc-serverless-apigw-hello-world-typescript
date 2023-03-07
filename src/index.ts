import { Event, Response } from './event';
import { Context } from './context';

const error = (code: number, message: string): Response => ({
    statusCode: code,
    body: { message },
    isBase64Encoded: false,
});

const response = (body: any): Response => ({
    statusCode: 200,
    body: body,
    isBase64Encoded: false,
});

export const handler = (event: Event, context: Context): Response => {
    const operationContext = event.requestContext.apiGateway?.operationContext;

    if (!context) {
        return error(500, 'undefined command context');
    }

    const name = operationContext?.name;

    if (!name) {
        return error(500, 'undefined parameter name');
    }

    return response(`Hello, ${name}!`);
}
