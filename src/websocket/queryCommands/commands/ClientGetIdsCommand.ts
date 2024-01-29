import { QueryCommand } from "../QueryCommand";

/**
 * ### ClientGetIds Command
 *
 * Displays all client IDs matching the unique identifier specified by cluid.
 *
 * Permissions:
 *  - N/A
 *
 * Syntax:
 *  - clientgetids cluid={clientUID}
 *
 * Example:
 *  - clientgetids cluid=dyjxkshZP6bz0n3bnwFQ1CkwZOM=
 */
export class ClientGetIdsCommand extends QueryCommand {
    private static readonly baseCommand = "clientgetids";

    // ADD DOCS
    constructor(uniqueId: number) {
        super(ClientGetIdsCommand.baseCommand, { cluid: uniqueId });
    }
}
