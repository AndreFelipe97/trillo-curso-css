import { FaStar, FaMapMarkerAlt, FaAngleRight } from "react-icons/fa";

import {
  Hotel1,
  Hotel2,
  Hotel3,
  User3,
  User4,
  User5,
  User6,
} from "../../assets/img";
import {
  Gallery,
  GalleryItem,
  GalleryPhoto,
  HotelView as StyledHotelView,
  Overview,
  OverviewHeading,
  OverviewLocation,
  OverviewRating,
  OverviewRatingAverage,
  OverviewRatingCount,
  OverViewStars,
  Detail,
  Description,
  List,
  UserReview,
  Recommend,
  RecommendCount,
  RecommendFriends,
} from "./styles";

export function HotelView() {
  return (
    <StyledHotelView>
      <Gallery>
        <GalleryItem>
          <GalleryPhoto src={Hotel1} alt="photo of hotel 1" />
        </GalleryItem>
        <GalleryItem>
          <GalleryPhoto src={Hotel2} alt="photo of hotel 2" />
        </GalleryItem>
        <GalleryItem>
          <GalleryPhoto src={Hotel3} alt="photo of hotel 3" />
        </GalleryItem>
      </Gallery>
      <Overview>
        <OverviewHeading>Hotel Las Palmas</OverviewHeading>
        <OverViewStars>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </OverViewStars>
        <OverviewLocation>
          <FaMapMarkerAlt />
          <button>Albufeira, Portugal</button>
        </OverviewLocation>
        <OverviewRating>
          <OverviewRatingAverage>8.6</OverviewRatingAverage>
          <OverviewRatingCount>429 votes</OverviewRatingCount>
        </OverviewRating>
      </Overview>
      <Detail>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe
            similique at itaque sint eius praesentium consequatur facere
            necessitatibus nisi ad quas cumque iste quod. Laboriosam
            exercitationem corporis quis ratione!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, laudantium maxime. Alias, commodi animi. Voluptate,
            perspiciatis quidem labore necessitatibus eligendi est ducimus
            eveniet dicta laudantium, laborum nihil omnis expedita dolores.
          </p>
          <List>
            <li>
              <FaAngleRight /> Close to the beach
            </li>
            <li>
              <FaAngleRight /> Breakfast included
            </li>
            <li>
              <FaAngleRight /> Free airport shuttle
            </li>
            <li>
              <FaAngleRight /> Free wifi in all rooms
            </li>
            <li>
              <FaAngleRight /> Air conditioning and heating
            </li>
            <li>
              <FaAngleRight /> Pets allowed
            </li>
            <li>
              <FaAngleRight /> We speak all languages
            </li>
            <li>
              <FaAngleRight /> Perfect for families
            </li>
          </List>
          <Recommend>
            <RecommendCount>
              <p>Lucy and 3 other friends recommend this hotel.</p>
            </RecommendCount>
            <RecommendFriends>
              <img src={User3} alt="Friend 1" />
              <img src={User4} alt="Friend 2" />
              <img src={User5} alt="Friend 3" />
              <img src={User6} alt="Friend 4" />
            </RecommendFriends>
          </Recommend>
        </Description>
        <UserReview>User Review</UserReview>
      </Detail>
    </StyledHotelView>
  );
}
