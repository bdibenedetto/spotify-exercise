import angular from 'angular';
import Template from './comment-list.html';

export class CommentList {
  constructor() {
    'ngInject';
    this.restrict = 'A';
    this.template = Template;
  }
  link($scope, $element, $attrs) {
      
  }
}

