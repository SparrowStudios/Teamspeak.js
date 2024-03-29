import { BanAddCommandOptions } from "@teamspeak.js/websocket/queryCommands/interfaces/BanAddCommandOptions";
import { QueryCommand } from "@teamspeak.js/websocket/queryCommands/QueryCommand";
import { QueryCommandOptions } from "@teamspeak.js/websocket/queryCommands/typings/QueryCommandOptions";
import { TeamspeakJsError } from "@teamspeak.js/errors/TeamspeakJsError";
import { TeamspeakJsErrorCodes } from "@teamspeak.js/errors/TeamspeakJsErrorCodes";

/**
 * ### BanAdd Command
 *
 * Adds a new ban rule on the selected virtual server.
 * All parameters are optional but at least one of the following
 * must be set: ip, name, or uid.
 *
 * Permissions:
 *  - b_client_ban_create
 *
 * Syntax:
 *  - banadd [ip={regexp}] [name={regexp}] [uid={clientUID}] [time={timeInSeconds}] [banreason={text}]
 *
 * Example:
 *  - banadd ip=1.2.3.4 banreason=just\s4\sfun
 */
export class BanAddCommand extends QueryCommand {
    private static readonly baseCommand = "banadd";

    // ADD DOCS
    constructor(options: BanAddCommandOptions) {
        if (options.ip === undefined && options.name === undefined && options.uniqueId === undefined) {
            throw new TeamspeakJsError(TeamspeakJsErrorCodes.MissingOptionalArguments, ["ip", "name", "uniqueId"]);
        }

        const args: QueryCommandOptions = {};
        if (options.ip !== undefined) {
            args["ip"] = options.ip;
        }
        if (options.name !== undefined) {
            args["name"] = options.name;
        }
        if (options.uniqueId !== undefined) {
            args["uid"] = options.uniqueId;
        }
        if (options.duration !== undefined) {
            args["time"] = options.duration;
        }
        if (options.reason !== undefined) {
            args["banreason"] = options.reason;
        }

        super(BanAddCommand.baseCommand, args);
    }
}
