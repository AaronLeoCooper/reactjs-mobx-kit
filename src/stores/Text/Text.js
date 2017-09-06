import { observable, computed, action } from 'mobx';

import { markdownToHtml } from './Text.utils';

class Text {

  @observable rawText = '';

  @action.bound
  setText (e) {
    this.rawText = e.target.value;
  }

  @computed get htmlStr () {
    return markdownToHtml(this.rawText);
  }

}

export default Text;
