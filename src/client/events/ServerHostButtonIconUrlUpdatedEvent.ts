import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerHostButtonIconUrlUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newIconUrl = data.virtualserverHostbuttonGfxUrl;

        queryClient.emit(QueryClientEvents.ServerHostButtonIconUrlUpdated, invokingClient, newIconUrl);
    }
}
