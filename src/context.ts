export class Context {
    readonly functionName: string;
    readonly functionVersion: string;
    readonly memoryLimitInMB: string;
    readonly requestId: string;
    readonly deadlineMs: number;
    readonly token?: object;

    constructor(
        functionName: string,
        functionVersion: string,
        memoryLimitInMb: string,
        requestId: string,
        deadlineMs: string,
        token?: object,
    ) {
        this.functionName = functionName;
        this.functionVersion = functionVersion;
        this.memoryLimitInMB = memoryLimitInMb;
        this.requestId = requestId;
        this.deadlineMs = Number.parseInt(deadlineMs, 10);
        this.token = token;
    }

    getRemainingTimeInMillis(): number {
        return this.deadlineMs - new Date().getTime();
    }
}

export const contextExample = () => new Context(
    'd4eo2faf62**********',
    'd4e3vrugh3**********',
    '128',
    '6e8356f9-489b-4c7b-8ba6-c8cd74f25455',
    (new Date().getTime() + 10).toString(),
    {
        'access_token': '<IAM-токен>',
        'expires_in': 42299,
        'token_type': 'Bearer'
    },
)
