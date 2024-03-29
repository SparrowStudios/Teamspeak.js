import { CodecEncryptionMode } from "../../structures/enums/CodecEncryptionMode";
import { Event } from "@teamspeak.js/client/events/Event";
import { QueryClientEvents } from "@teamspeak.js/utils/enums/QueryClientEvents";

// ADD DOCS
export class ServerCodecEncryptionModeUpdatedEvent extends Event {
    override async handle(data: any) {
        const queryClient = this.queryClient;

        const invokingClient = queryClient.clients.resolve(data.invokerid);
        const newEncryptionMode = data.virtualserverCodecEncryptionMode as CodecEncryptionMode;

        queryClient.emit(QueryClientEvents.ServerCodecEncryptionModeUpdated, invokingClient, newEncryptionMode);
    }
}
