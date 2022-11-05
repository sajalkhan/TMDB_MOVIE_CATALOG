/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Movies } from './';

export default {
  title: 'components/organisms/Movies',
  component: Movies,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Movies>;

const Template: ComponentStory<typeof Movies> = args => (
  <MemoryRouter>
    <Movies {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'romantic',
  movieId: 12,
};
