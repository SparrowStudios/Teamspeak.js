const errorKeys = [
    // General Errors
    "MissingOption",
    "InvalidOption",
    "ClientNotOnline",

    // Socket Errors
    "WebSocketTimeout",
    "WebSocketConnectionExists",
    "WebSocketNonExistant",

    // Command Errors
    "MissingArguments",
    "MissingOptionalArguments",
    "InstanceEditNotApprovedKey"
];

// Beacuse the values are always the same as the keys, and I'm too lazy to type
// the key and value twice, let's use some fancy mapping code instead!
export const TeamspeakJsErrorCodes = Object.fromEntries(errorKeys.map(key => [key, key]));
