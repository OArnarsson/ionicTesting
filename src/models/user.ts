// Model based on data from https://api.github.com/users/{username}
// Skippings field I don't find interesting

export interface User {
    "id": number,                   // GITHUB ID
    "name": string,                 // REAL NAME
    "login": string,                // USERNAME
    "email": string,                // EMAIL
    "location": string,             // CURRENT LOCATION
    "company": null,                // CURRENT COMPANY
    "organizations_url": string,    // ORGS LINK
    "avatar_url": string,           // PROFILE IMG LINK
    "html_url": string,             // PROFILE LINK
    "blog": string,                 // WEBSITE
    "hireable": boolean,            // AVAILABLE FOR HIRE
    "public_repos": number,         // NUMBER OF PUBLIC REPOS
    "repos_url": string,            // LINK TO REPOS
    "followers": number,            // NUMBER OF FOLLOWERS
    "following": number,            // NUMBER OF FOLLOWING
    "followers_url": string,        // LINK TO FOLLOWERS
    "following_url": string,        // LINK TO FOLLOWING
    "created_at": string,           // TIME CREATED
    "updated_at": string,           // LAST SEEN
    "received_events_url": string,  // FEED
}