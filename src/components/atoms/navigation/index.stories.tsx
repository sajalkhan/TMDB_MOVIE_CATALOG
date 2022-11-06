/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
      <a href="#">home</a>
      <a href="#">SignUp</a>
      <a href="#">Profile</a>
    </>,
  ],
};
