import React, { useState, useCallback } from "react";
import MainPageLayout from "../components/MainPageLayout";
import ActorGrid from "../components/actor/ActorGrid";
import { apiGet } from "../misc/config";
import ShowGrid from "../components/show/ShowGrid";
import { useLastQuery } from "../misc/custom-hooks";
import CustomRadio from "../components/CustomRadio";
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from "./Home.styled";

const renderResults = (results) => {
  if (results && results.length === 0) {
    return <div>No results</div>;
  }
  if (results && results.length > 0) {
    return results[0].show ? (
      <ShowGrid data={results} />
    ) : (
      <ActorGrid data={results} />
    );
  }
  return null;
};
const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  const isShowsSearch = searchOption === "shows";

  const onInputChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [setInput]
  );
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
      // console.log(result);
    });
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = useCallback((e) => {
    setSearchOption(e.target.value);
  }, []);

  // useWhyDidYouUpdate("home", { onInputChange, onKeyDown });

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="search something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            type="text"
            onChange={onRadioChange}
          />
        </div>
        <div>
          <div>
            <CustomRadio
              label="Actors"
              id="actors-search"
              value="people"
              checked={!isShowsSearch}
              onChange={onRadioChange}
            />
          </div>
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(results)}
    </MainPageLayout>
  );
};

export default Home;
