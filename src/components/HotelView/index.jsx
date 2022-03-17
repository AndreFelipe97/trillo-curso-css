import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

import { Hotel1, Hotel2, Hotel3 } from "../../assets/img";
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
    </StyledHotelView>
  );
}
