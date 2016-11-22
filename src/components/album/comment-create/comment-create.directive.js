import angular from 'angular';
import Template from './comment-create.html';

export class CommentCreate {
  constructor() {
    'ngInject';
    this.restrict = 'A';
    this.template = Template;
  }
  link($scope, $element, $attrs) {
      
  }
}

