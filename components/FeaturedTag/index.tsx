import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const StyledFeaturedTag = styled.div`
  .title {
    ${tw`text-xl`}
  }

  .entries {
    ${tw`my-3`}
  }
  .entry {
    ${tw`my-3`}
    &__link {
      ${tw`my-3`}
    }
    &__creator {
      ${tw`block text-sm `}
    }
  }
`;

const FeaturedTag = () => {
  return (
    <StyledFeaturedTag>
      <h1 className="title">#challenge</h1>
      <div className="entries">
        <div className="entry">
          <a href="#" className="entry__link">
            সবচেয়ে গুরুত্বপূর্ণ মনে হয়েছে, তার প্রায় এক দশকের গেরিলা জীবন। কারণ
            এম এন লারমাই প্রথম সশস্ত্র গেরিলা যুদ্ধের মাধ্যমে
          </a>
          <a href="#" className="entry__creator">
            john_mia
          </a>
        </div>
        <div className="entry">
          <a href="#" className="entry__link">
            সবচেয়ে গুরুত্বপূর্ণ মনে হয়েছে, তার প্রায় এক দশকের গেরিলা জীবন। কারণ
            এম এন লারমাই প্রথম সশস্ত্র গেরিলা যুদ্ধের মাধ্যমে
          </a>
          <a href="#" className="entry__creator">
            john_mia
          </a>
        </div>
        <div className="entry">
          <a href="#" className="entry__link">
            সবচেয়ে গুরুত্বপূর্ণ মনে হয়েছে, তার প্রায় এক দশকের গেরিলা জীবন। কারণ
            এম এন লারমাই প্রথম সশস্ত্র গেরিলা যুদ্ধের মাধ্যমে
          </a>
          <a href="#" className="entry__creator">
            john_mia
          </a>
        </div>
        <div className="entry">
          <a href="#" className="entry__link">
            সবচেয়ে গুরুত্বপূর্ণ মনে হয়েছে, তার প্রায় এক দশকের গেরিলা জীবন। কারণ
            এম এন লারমাই প্রথম সশস্ত্র গেরিলা যুদ্ধের মাধ্যমে
          </a>
          <a href="#" className="entry__creator">
            john_mia
          </a>
        </div>
        <div className="entry">
          <a href="#" className="entry__link">
            সবচেয়ে গুরুত্বপূর্ণ মনে হয়েছে, তার প্রায় এক দশকের গেরিলা জীবন। কারণ
            এম এন লারমাই প্রথম সশস্ত্র গেরিলা যুদ্ধের মাধ্যমে
          </a>
          <a href="#" className="entry__creator">
            john_mia
          </a>
        </div>
      </div>
    </StyledFeaturedTag>
  );
};

export default FeaturedTag;
