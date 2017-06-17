// Model based on data from https://api.github.com/users/{username}/repos
// Skipping fields I don't find interesting

export interface Repo {
    "id": number,                   // GITHUB ID
    "name": string,                 // REPO NAME
    "private": boolean,             // VISIBILITY
    // "html_url": string,
    "description": string,          // REPO DESCRIPTION
    "url": string,                  // LINK TO REPO IN API
    "fork": boolean,                // IS A FORK?
    // "forks_url": string,
    // "collaborators_url": string,
    // "teams_url": string,
     // "issue_events_url": string,
    "events_url": string,           // REPO FEED
    // "assignees_url": string,
    // "branches_url": string,
    // "tags_url": string,
    // "blobs_url": string,
    // "git_tags_url": string,
    // "git_refs_url": string,
    // "trees_url": string,
    // "statuses_url": string,
    // "languages_url": string,
    // "stargazers_url": string,
    // "contributors_url": string,
    // "subscribers_url": string,
    // "subscription_url": string,
    // "commits_url": string,
    // "git_commits_url": string,
    // "comments_url": string,
    // "issue_comment_url": string,
    // "contents_url": string,
    // "compare_url": string,
    // "merges_url": string,
    // "archive_url": string,
    // "downloads_url": string,
    // "issues_url": string,
    // "pulls_url": string,
    // "milestones_url": string,
    // "notifications_url": string,
    // "labels_url": string,
    // "releases_url": string,
    // "deployments_url": string,
    "created_at": string,           // TIME CREATED
    "updated_at": string,           // LAST UPDATE
    "pushed_at": string,            // LAST COMMIT ON MAIN BRANCH
    "size": number,                 // REPO SIZE
    "language": string,             // MAIN LANGUAGE
    // "open_issues_count": number,
    "homepage": string,             // LINK TO DEMO
    "forks_count": number,          // NUMBER OF FORKS
    "stargazers_count": number,     // NUMBER OF STARS
    "watchers_count": number,       // NUMBER OF WATCHERS
    "default_branch": string
}
