import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerDefaultServerGroupUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newGroupId = data.virtualserverDefaultServerGroup;

        queryClient.emit(QueryClientEvents.ServerDefaultServerGroupUpdated, invokingClient, newGroupId);
    }
}
