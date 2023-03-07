import assert from 'assert';
import { Event, Response } from '../event';
import { handler } from '../index';
import { contextExample } from '../context';

describe('Test', () => {
    it('Test Handler', async () => {
        const requestId = 'a2fe3b91-4efe-4a59-b916-ce1b6b004142';
        const event: Event = {
            requestContext: {
                identity: {
                    sourceIp: '2a02:6b8:c02:900:0:f822:0:a8',
                    userAgent: 'PostmanRuntime/7.28.1',
                },
                httpMethod: 'GET',
                requestId,
                requestTime: '24/Aug/2021:17:48:59 +0000',
                requestTimeEpoch: 1_629_827_339,
                apiGateway: {
                    operationContext: {
                        name: 'world',
                    },
                },
            },
            httpMethod: 'GET',
            path: '/world',
            isBase64Encoded: false,
        };
        const context = contextExample()

        const response: Response = handler(event, context);

        assert.equal(response.statusCode, 200);
        assert.equal(response.body, "Hello, world!");
    });
});
