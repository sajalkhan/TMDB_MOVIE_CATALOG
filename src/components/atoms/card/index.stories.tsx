/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './';

export default {
  title: 'components/atoms/Card',
  component: Card,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  modifiers: 'medium',
  imgUrl: '/yB8BMtvzHlMmRT1WmTQnGv1bcOK.jpg',
  movieName: 'Tarzan',
};
