import { QueryClientEvents } from "../../utils/enums/QueryClientEvents";
import { Event } from "./Event";

// ADD DOCS
export class ClientKickedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const client = await queryClient.getClientByDbId(this.queryClient.serverDatabaseIdMap[`id_${data.clid}`]);
        const invokingClient = await queryClient.getClientByServerId(data.invokerid);
        const channel = await queryClient.getChannelById(data.cfid);
        const reason = data.reasonmsg;

        queryClient.emit(QueryClientEvents.ClientKicked, client, invokingClient, channel, reason);
    }
}