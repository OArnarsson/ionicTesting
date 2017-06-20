import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedType',
})
export class FeedTypePipe implements PipeTransform {

  transform(value: string) {
    if (value == 'WatchEvent') return '<i class="fa fa-star"></i>';
    if (value == 'ForkEvent') return '<i class="fa fa-code-fork"></i>';
    if (value == 'CreateEvent') return '<i class="fa fa-sitemap"></i>';
    if (value == 'PublicEvent') return '<i class="fa fa-book"></i>';
    if (value == 'MemberEvent') return '<i class="fa fa-user"></i>';
    if (value == 'PushEvent') return '<i class="fa fa-upload"></i>';
    if (value == 'PullRequestEvent') return '<i class="fa fa-compress"></i>';
    if (value == 'IssuesEvent') return '<i class="fa fa-exclamation-circle"></i>';
    if (value == 'IssueCommentEvent') return '<i class="fa fa-comments"></i>';
    if (value == 'DeleteEvent') return '<i class="fa fa-trash"></i>';
  }
}
