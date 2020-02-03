import { shallowMount } from '@vue/test-utils';
import SwitchChatComponent from '../../src/components/SwitchChatComponent.vue';

describe('SwitchChatComponent.vue', () => {
  const wrapper = shallowMount(SwitchChatComponent);
  test('isVueInstance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
