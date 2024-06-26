/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { CardList } from './';

export default {
  title: 'components/molecules/CardList',
  component: CardList,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = args => (
  <MemoryRouter>
    <CardList {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  movies: [
    {
      id: 110,
      imgUrl: '/yB8BMtvzHlMmRT1WmTQnGv1bcOK.jpg',
      movieName: 'Tarzan',
    },
    {
      id: 10,
      imgUrl: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
      movieName: 'Tarzan',
    },
    {
      id: 11,
      imgUrl: '/6PQqC4SbY910VvyVad6mvsboILU.jpg',
      movieName: 'Tarzan',
    },
    {
      id: 12,
      imgUrl: '/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg',
      movieName: 'Tarzan',
    },
    {
      id: 13,
      imgUrl: '/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
      movieName: 'Tarzan',
    },
    {
      id: 14,
      imgUrl: '/aGBuiirBIQ7o64FmJxO53eYDuro.jpg',
      movieName: 'Tarzan',
    },
  ],
};
