import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";

/**
 * ### ChannelGroupCopy Command
 *
 * Creates a copy of the channel group specified with scgid. If
 * tcgid is set to 0, the server will create a new group. To
 * overwrite an existing group, simply set tcgid to the ID of a
 * designated target group. If a target group is set, the name
 * parameter will be ignored. The type parameter can be used to
 * create template groups.
 *
 * Permissions:
 *  - b_virtualserver_channelgroup_create
 *  - i_group_modify_power
 *  - i_group_needed_modify_power
 *
 * Syntax:
 *  - channelgroupcopy scgid={sourceGroupID} tcgid={targetGroupID} name={groupName} type={groupDbType}
 *
 * Example:
 *  - channelgroupcopy scgid=4 tcgid=0 name=My\sGroup\s(Copy) type=1
 */
export class ChannelGroupCopyCommand extends QueryCommand {
    private static readonly baseCommand = "channelgroupcopy";

    // ADD DOCS
    constructor(sourceGroupId: number, targetGroupId: number = 0, name: string, type: number = 1) {
        super(ChannelGroupCopyCommand.baseCommand, {
            scgid: sourceGroupId,
            tcgid: targetGroupId,
            name: name,
            type: type
        });
    }
}
