import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerHostButtonUrlUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newUrl = data.virtualserverHostbuttonUrl;

        queryClient.emit(QueryClientEvents.ServerHostButtonUrlUpdated, invokingClient, newUrl);
    }
}
