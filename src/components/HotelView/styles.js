import styled from "styled-components";
import { pulsate } from '../../styles/animations';

export const HotelView = styled.main`
  background-color: var(--color-white);
  height: 80rem;
  flex: 1;
`;

export const Gallery = styled.div`
  display: flex;
`;

export const GalleryItem = styled.figure``;

export const GalleryPhoto = styled.img`
  width: 100%;
  display: block;
`;

export const Overview = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-light-2);

  svg {
    width: 1.75rem;
    height: 1.75rem;
    color: var(--color-primary);
  }
`;

export const OverviewHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1.5rem 3rem;
`;

export const OverViewStars = styled.div`
  margin-right: auto;
  display: flex;
`;

export const OverviewLocation = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: .5rem;
  }

  button {
    border: none;
    color: var(--color-primary);
    font-size: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      color: var(--color-grey-dark-1);
    }

    &:focus {
      outline: none;
      animation: ${pulsate} 1s infinite;
    }
  }
`;

export const OverviewRating = styled.div`
  background-color: var(--color-primary);
  color: var(--color-white);
  margin-left: 3rem;
  padding: 0 2.2rem;
  align-self: stretch;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OverviewRatingAverage = styled.div`
  font-size: 2.25rem;
  font-weight: 300;
  margin-bottom: -3px;
`;

export const OverviewRatingCount = styled.div`
  font-size: .8rem;
  text-transform: uppercase;
`;
