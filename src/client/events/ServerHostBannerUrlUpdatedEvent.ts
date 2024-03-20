import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerHostBannerUrlUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newUrl = data.virtualserverHostbannerUrl;

        queryClient.emit(QueryClientEvents.ServerHostBannerUrlUpdated, invokingClient, newUrl);
    }
}
