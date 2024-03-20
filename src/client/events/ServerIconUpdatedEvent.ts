import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerIconUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newIconId = data.virtualserverIconId;

        queryClient.emit(QueryClientEvents.ServerIconUpdated, invokingClient, newIconId);
    }
}
