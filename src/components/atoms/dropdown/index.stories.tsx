/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './';

export default {
  title: 'components/atoms/Dropdown',
  component: Dropdown,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <a href="https://blog.hubspot.com/">Blog</a>,
    <a href="https://academy.hubspot.com/">Academy</a>,
    <a href="https://www.youtube.com/user/hubspot">YouTube</a>,
    <a href="https://www.youtube.com/user/hubspot">Technology World</a>,
    <a href="https://www.youtube.com/user/hubspot">Technology World bangladesh</a>,
  ],
};
