import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button/Button';

const HomeBannerStyle = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 50%;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
    button {
      text-transform: capitalize;
    }
    &-image {
      img {
      }
    }
  }
  @media screen and (max-width: 1023.98px) {
    .banner {
      flex-direction: column;
      min-height: unset;
      &-heading {
        font-size: 30px;
        margin-bottom: 10px;
        font-weight: 600;
      }
      &-desc {
        font-size: 14px;
        margin-bottom: 20px;
      }
      &-image {
        margin-top: 25px;
      }
      &-button {
        font-size: 14px;
        height: auto;
        padding: 15px;
      }
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyle>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque iure eos,
              reiciendis molestiae asperiores, voluptatibus numquam quos quod dolores dicta pariatur
              exercitationem sequi, nesciunt corrupti modi! Ullam, quasi sapiente!
            </p>
            <Button
              type="button"
              to="/sign-in"
              style={{ maxWidth: '200px' }}
              className="banner-button"
            >
              get started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/assets/images/banner/image-banner-home.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyle>
  );
};

export default HomeBanner;
