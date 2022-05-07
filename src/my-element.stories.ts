import './my-element';
import type { Args, Meta } from '@storybook/web-components';
import type { MyElement } from './my-element';
import { html } from 'lit';

export default {
  component: 'my-element',
  render: ({name}) =>
    html`
      <my-element
      name=${name}
      ></my-element>
    `,
} as Meta<MyElement>;


const defaultArgs: Args = {
  name:'storyStoreV7'
};

export const Primary = {
  args: { ...defaultArgs },
};
