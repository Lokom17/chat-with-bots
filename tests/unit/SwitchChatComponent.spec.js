import { shallowMount } from '@vue/test-utils';
import SwitchChatComponent from '../../src/components/SwitchChatComponent.vue';

describe('SwitchChatComponent.vue', () => {
  const wrapper = shallowMount(SwitchChatComponent);
  test('it is VueInstance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
