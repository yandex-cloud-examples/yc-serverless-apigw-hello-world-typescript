export interface Event {
    resource?: string;
    path: string;
    httpMethod: string;
    headers?: Record<string, string>;
    multiValueHeaders?: Record<string, string[]>;
    queryStringParameters?: Record<string, string>;
    multiValueQueryStringParameters?: Record<string, string[]>;
    requestContext: RequestContext;
    pathParameters?: Record<string, string>;
    body?: Body;
    isBase64Encoded?: boolean;
    parameters?: Record<string, string>;
    multiValueParameters?: Record<string, string[]>;
}

export interface RequestContext {
    identity: {
        sourceIp: string;
        userAgent: string;
    };
    httpMethod: string;
    requestId: string;
    requestTime: string;
    requestTimeEpoch: number;
    apiGateway?: {
        operationContext?: {
            name: string
        }
    };
}

export interface Response {
    statusCode: number;
    headers?: Record<string, string>;
    multiValueHeaders?: Record<string, string[]>;
    body?: any;
    isBase64Encoded?: boolean;
}
