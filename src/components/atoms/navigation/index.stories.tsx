/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from 'components/atoms/dropdown';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from './';

export default {
  title: 'components/atoms/Navigation',
  component: Navigation,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = args => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <>
      <Dropdown>
        <a href="https://blog.hubspot.com/">Blog</a>
        <a href="https://academy.hubspot.com/">Academy</a>
        <a href="https://www.youtube.com/user/hubspot">YouTube</a>
        <a href="https://www.youtube.com/user/hubspot">Technology World</a>
        <a href="https://www.youtube.com/user/hubspot">Technology World bangladesh</a>
      </Dropdown>
      <a href="#">Profile</a>
    </>,
  ],
};
