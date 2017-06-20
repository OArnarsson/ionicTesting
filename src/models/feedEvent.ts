// Model based on data from https://api.github.com/users/{username}
// Skippings field I don't find interesting

export interface FeedEvent {
    "type": string,
    "created_at": string,
    "actor": { "login": string },
    "repo": { "name": string }
}