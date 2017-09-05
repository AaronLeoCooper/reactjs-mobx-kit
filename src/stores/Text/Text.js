import { observable, computed, action } from 'mobx';

import { markdownToHtml } from './Text.utils';

class Text {

  @observable rawText = '';

  @action setText = (text) => {
    this.rawText = text;
  }

  @computed get htmlStr () {
    return markdownToHtml(this.rawText);
  }

}

export default Text;
