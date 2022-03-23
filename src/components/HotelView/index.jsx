import { FaStar, FaMapMarkerAlt, FaAngleRight } from "react-icons/fa";

import {
  Hotel1,
  Hotel2,
  Hotel3,
  User1,
  User2,
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
  ReviewPhoto,
  Review,
  ReviewText,
  ReviewUser,
  ReviewUserBox,
  UserRating,
  ButtonInline,
  Cta,
  CtaBookNow,
  CtaButton,
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
          <ButtonInline>Albufeira, Portugal</ButtonInline>
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
              <ReviewPhoto src={User3} alt="Friend 1" />
              <ReviewPhoto src={User4} alt="Friend 2" />
              <ReviewPhoto src={User5} alt="Friend 3" />
              <ReviewPhoto src={User6} alt="Friend 4" />
            </RecommendFriends>
          </Recommend>
        </Description>
        <UserReview>
          <Review>
            <ReviewText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              incidunt omnis dolor sunt pariatur iste veritatis, ipsam neque ad
              accusantium quos velit minus, tempore atque. Officiis neque
              doloribus a distinctio.
            </ReviewText>
            <ReviewUser>
              <img src={User1} alt="User 1" />
              <ReviewUserBox>
                <p id="name">Nick Smith</p>
                <p id="date">Feb 23rd, 2017</p>
              </ReviewUserBox>
              <UserRating>7.8</UserRating>
            </ReviewUser>
          </Review>
          <Review>
            <ReviewText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              incidunt omnis dolor sunt pariatur iste veritatis, ipsam neque ad
              accusantium quos velit minus, tempore atque. Officiis neque
              doloribus a distinctio.
            </ReviewText>
            <ReviewUser>
              <img src={User2} alt="User 1" />
              <ReviewUserBox>
                <p id="name">Mary Thomas</p>
                <p id="date">Sept 13th, 2017</p>
              </ReviewUserBox>
              <UserRating>9.3</UserRating>
            </ReviewUser>
          </Review>
          <ButtonInline>
            Show all <span>&rarr;</span>
          </ButtonInline>
        </UserReview>
      </Detail>
      <Cta>
        <CtaBookNow>
          Good news! We have 4 free rooms for your selected dates!
        </CtaBookNow>
        <CtaButton>
          <span className="visible">Book now</span>
          <span className="invisible">Only 4 rooms left</span>
        </CtaButton>
      </Cta>
    </StyledHotelView>
  );
}
