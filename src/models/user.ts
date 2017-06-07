// Model based on data from https://api.github.com/users/{username}
// Skipping field I don't find interesting

export interface User {
    "name": string,
    "login": string,
    "email": string,
    "location": string,
    "company": null,
    "avatar_url": string,
    "html_url": string,
    "blog": string,
    "hireable": boolean,
    "public_repos": number,
    "followers": number,
    "following": number,
    "created_at": string,
}