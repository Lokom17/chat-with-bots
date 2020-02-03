import { shallowMount } from '@vue/test-utils';
import ChatList from '../../src/components/ChatList.vue';

describe('ChatList.vue', () => {
  const wrapper = shallowMount(ChatList);
  test('it is VueInstance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
