import {
  observable,
  computed,
  action
} from 'mobx';

class Text {

  @observable rawText = '';

  @action setText = (text) => {
    this.rawText = text;
  }

  @computed get markdown () {
    const markdown = this.rawText
      .replace(new RegExp('\\# ', 'g'), '');

    return `<p>${markdown}</p>`;
  }

}

export default Text;
