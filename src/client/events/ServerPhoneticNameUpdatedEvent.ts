import { Event } from "./Event";
import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerPhoneticNameUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newPhoneticName = data.virtualserverNamePhonetic;

        queryClient.emit(QueryClientEvents.ServerTempChannelDeleteDelayUpdated, invokingClient, newPhoneticName);
    }
}
