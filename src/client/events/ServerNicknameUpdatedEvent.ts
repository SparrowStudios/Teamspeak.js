import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ServerNicknameUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const newNickname = data.virtualserverNickname;

        queryClient.emit(QueryClientEvents.ServerNicknameUpdated, invokingClient, newNickname);
    }
}
