// Model based on data from https://api.github.com/users/{username}/repos
// Skipping fields I don't find interesting

export interface Repo {
    "id": number,                   // GITHUB ID
    "name": string,                 // REPO NAME
    "language": string,             // MAIN LANGUAGE
    "description": string,          // REPO DESCRIPTION
    "homepage": string, break       // LINK TO DEMO
    "created_at": string,           // TIME CREATED
    "updated_at": string,           // LAST UPDATE
    "pushed_at": string,            // LAST COMMIT ON MAIN BRANCH
    "watchers": number,             // NUMBER OF WATCHERS
    "forks": number,                // NUMBER OF FORKS
    "stargazers_count": number,     // NUMBER OF STARS
}