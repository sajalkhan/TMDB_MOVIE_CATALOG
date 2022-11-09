/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MovieInfo } from './';

export default {
  title: 'components/molecules/MovieInfo',
  component: MovieInfo,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof MovieInfo>;

const Template: ComponentStory<typeof MovieInfo> = args => (
  <MemoryRouter>
    <MovieInfo {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  id: 759507,
  imgUrl: '/8riQcCq8IGDiusOQVfCYpebnT5V.jpg',
  title: 'The edge of human',
  popularity: 0.84,
  releaseDate: '2022-06-25',
  imDbId: 'tt17887614',
  overview:
    'Inspired by the classic movie Blade Runner and the book Do Android Dream Of Electric Sheep?  Jeter is an android hunter who is investigating a moon bus hijacking’s that crashed near the coast of Macau.  But when he becomes friends with a female android Marie he start to second guess his job.',
};
