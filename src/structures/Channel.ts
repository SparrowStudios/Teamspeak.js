import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";

// ADD DOCS
export class Channel extends Base {
    id: number | null;
    uniqueId: string | null;
    parentChannelId: number | null;
    name: string | null;
    description: string | null;
    topic: string | null;
    order: number | null;
    iconId: number | null;
    neededTalkPower: number | null;
    hasPassword: boolean;
    password: string | undefined | null;
    isEmpty: boolean;
    secondsEmpty: number | null;
    channelMaxClients: number | null;
    familyMaxClients: number | null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient)

        this.patch(data);        
    }

    protected patch(data: any) {
        this.id = ("id" in data) ? data.id : null;
        this.uniqueId = ("channelUniqueIdentifier" in data) ? data.channelUniqueIdentifier : null;
        this.parentChannelId = ("pid" in data) ? data.pid : null;
        this.name = ("channelName" in data) ? data.channelName : null;
        this.description = ("channelDescription" in data) ? data.channelDescription : null;
        this.topic = ("channelTopic" in data) ? data.channelTopic : null;
        this.order = ("channelOrder" in data) ? data.channelOrder : null;
        this.iconId = ("channelIconId" in data) ? data.channelIconId : null;
        this.neededTalkPower = ("channelNeededTalkPower" in data) ? data.channelNeededTalkPower : null;
        this.hasPassword = ("channelFlagPassword" in data) ? data.channelFlagPassword : null;
        this.password = ("channelPassword" in data) ? data.channelPassword : null;
        this.isEmpty = ("secondsEmpty" in data) ? data.secondsEmpty > -1 : false;
        this.secondsEmpty = ("secondsEmpty" in data) ? data.secondsEmpty : null;
        this.channelMaxClients = ("channelMaxclients" in data) ? data.channelMaxclients : null;
        this.familyMaxClients = ("channelMaxfamilyclients" in data) ? data.channelMaxfamilyclients : null;

        const x = {
            pid: '0',
            channelName: 'Default Channe',
            channelTopic: 'topicc',
            channelDescription: 'This is the default channelssdada',
            channelPassword: 'DJ9fLHqwFJP+5VgQhSfLSJtBrtk=',
            channelCodec: 4,
            channelCodecQuality: 6,
            channelMaxclients: -1,
            channelMaxfamilyclients: -1,
            channelOrder: 0,
            channelFlagPermanent: true,
            channelFlagSemiPermanent: false,
            channelFlagDefault: false,
            channelFlagPassword: true,
            channelCodecLatencyFactor: 1,
            channelCodecIsUnencrypted: 0,
            channelSecuritySalt: undefined,
            channelDeleteDelay: 0,
            channelUniqueIdentifier: '7aead8cb-29d7-4f8f-b612-adfdd612555b',
            channelFlagMaxclientsUnlimited: true,
            channelFlagMaxfamilyclientsUnlimited: true,
            channelFlagMaxfamilyclientsInherited: false,
            channelFilepath: 'files/virtualserver_1/channel_1',
            channelNeededTalkPower: 1,
            channelForcedSilence: 0,
            channelNamePhonetic: 'test',
            channelIconId: 0,
            channelBannerGfxUrl: undefined,
            channelBannerMode: 0,
            secondsEmpty: 6
        }
    }
}