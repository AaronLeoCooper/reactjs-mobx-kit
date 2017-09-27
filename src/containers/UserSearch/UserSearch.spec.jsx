import { assert } from 'chai';
import { stub } from 'sinon';
import { mountWithStores } from '../../../test/test.helpers';

import UserSearch from './';
import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

suite('UserSearch');

// test('renders expected children', function () {
//   const store = {
//     rawText: 'test',
//     htmlStr: '<p>test</p>',
//     setText: stub()
//   };

//   const node = mountWithStores({ Text: store })(
//     UserSearch
//   );

//   const textbox = node.find(Textbox);
//   const htmlPreview = node.find(HtmlPreview);

//   assert.equal(textbox.length, 1, 'renders <Textbox>');

//   assert.equal(
//     textbox.prop('value'),
//     store.rawText,
//     'passes rawText to <Textbox> value'
//   );

//   assert.deepEqual(
//     textbox.prop('onChange'),
//     store.setText,
//     'passes setText to <Textbox> onChange'
//   );

//   assert.equal(htmlPreview.length, 1, 'renders <HtmlPreview>');

//   assert.equal(
//     htmlPreview.prop('htmlStr'),
//     store.htmlStr,
//     'passes htmlStr to <HtmlPreview>'
//   );
// });
