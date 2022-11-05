/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
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

const Template: ComponentStory<typeof Movies> = args => <Movies {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'romantic',
  movieId: 12,
};
