import styled from "styled-components";
import { pulsate } from "../../styles/animations";

export const HotelView = styled.main`
  background-color: var(--color-white);
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
    margin-right: 0.5rem;
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
    transition: all 0.2s;

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
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const Detail = styled.div`
  font-size: 1.4rem;
  display: flex;
  padding: 4.5rem;
  background-color: var(--color-grey-light-1);
  border-bottom: var(--line);
`;

export const Description = styled.div`
  background-color: var(--color-white);
  flex: 0 0 60%;
  margin-right: 4.5rem;
  box-shadow: var(--shadow-light);
  padding: 3rem;

  p:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 3rem 0;
  border-bottom: var(--line);
  border-bottom: var(--line);

  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 50%;
    margin-bottom: 0.7rem;
  }

  svg {
    color: var(--color-primary);
  }
`;

export const Recommend = styled.div`
  font-size: 1.3rem;
  color: var(--color-grey-dark-3);
  display: flex;
  align-items: center;
`;

export const RecommendCount = styled.div`
  margin-right: auto;
`;

export const RecommendFriends = styled.div``;

export const ReviewPhoto = styled.img`
  box-sizing: content-box;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid var(--color-white);

  &:not(:first-child) {
    margin-left: -1.5rem;
  }
`;

export const UserReview = styled.figure`
  flex: 1;
`;

export const Review = styled.figure`
  background-color: var(--color-white);
  box-shadow: var(--shadow-light);
  padding: 3rem;
  margin-bottom: 3.5rem;
`;

export const ReviewText = styled.blockquote`
  margin-bottom: 2rem;
`;

export const ReviewUser = styled.figcaption`
  display: flex;
  justify-content: center;
  img {
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
`;

export const ReviewUserBox = styled.div`
  margin-right: auto;

  p#name {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  p#date {
    font-size: 1rem;
    color: var(--color-grey-dark-3);
  }
`;

export const UserRating = styled.div`
  color: var(--color-primary);
  font-size: 2.2rem;
  font-weight: 300;
`;
