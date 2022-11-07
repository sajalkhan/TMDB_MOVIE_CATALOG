/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
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

const Template: ComponentStory<typeof Card> = args => (
  <MemoryRouter>
    <Card {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  id: 759507,
  modifiers: 'medium',
  imgUrl: '/yB8BMtvzHlMmRT1WmTQnGv1bcOK.jpg',
  movieName: 'Tarzan',
};
