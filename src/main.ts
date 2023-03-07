import { handler } from './index';
import { Event } from './event'
import { Context, contextExample } from "./context";

const main = () => {
    if (process.argv.length != 3 && process.argv.length != 4) {
        console.log('Usage: node main.js <json event> [<json context>]');
        return;
    }

    const eventJson = process.argv[2];
    const contextJson = process.argv.length == 4 ? process.argv[3] : undefined

    let event: Event
    let context: Context
    try {
        event = JSON.parse(eventJson);
        context = contextJson ? JSON.parse(contextJson) : contextExample()
    } catch (e) {
        console.error(`JSON parsing error: ${e}`);
        return;
    }

    try {
        console.log(handler(event, context))
    } catch (e) {
        console.error(`Handler error: ${e}`)
    }
}

main()
