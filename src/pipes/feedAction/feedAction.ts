import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedAction',
})
export class FeedActionPipe implements PipeTransform {

  transform(value: string) {
    if (value == 'WatchEvent') return 'starred';
    if (value == 'ForkEvent') return 'forked';
    if (value == 'CreateEvent') return 'created';
    if (value == 'PublicEvent') return 'published';
    if (value == 'MemberEvent') return 'added';
    if (value == 'PushEvent') return 'pushed to';
    if (value == 'PullRequestEvent') return 'submitted a pull request in';
    if (value == 'IssuesEvent') return 'issued';
    if (value == 'IssueCommentEvent') return 'commented on an issue in';
    if (value == 'DeleteEvent') return 'deleted';
  }
}
