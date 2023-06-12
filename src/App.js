import logo from "./logo.svg";
import "./App.css";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [searchText, setSearchText] = useState("");
  const [numOfOccurences, setnumOfOccurences] = useState(0);
  const [textToRender, setTextTorender] = useState(
    "How to Write Great Titles for Essays? Formulating a compelling title for your research paper involves several steps. If your instructor has provided you with a research question to answer, you can select relevant keywords from there. However, looking to your thesis statement for guidance is often best. Your thesis statement should capture the central argument of your paper. Once you have chosen appropriate keywords, the next step is to make your title as specific as possible. It is essential to ask yourself if your title accurately reflects the content of your paper. A compelling title not only captures the main idea of your paper but also entices the reader to continue reading. In accordance with MLA guidelines, you should capitalize the keywords in your title. This is because capitalization signals the importance of words and, by extension, the ideas they represent. Capitalizing keywords in your title will help your readers better understand the importance of the concepts you are discussing."
  );

  const SearchingAndHighliting = () => {
    if (searchText === "") return textToRender;
    else {
      return textToRender.replace(
        new RegExp(searchText.toLowerCase(), "gi"),
        `<mark>${searchText}</mark>`
      );
    }
  };
  useEffect(() => {
    if (searchText) {
      const occur = (
        textToRender.match(new RegExp(searchText.toLowerCase(), "gi")) || []
      ).length;
      setnumOfOccurences(occur);
    } else {
      setnumOfOccurences(0);
    }
  }, [searchText]);
  return (
    <Grid item container padding={5} bgcolor={"#f2f2f2"}>
      <Grid item fontSize={40} xs={12} fontWeight={"bold"}>
        Search
      </Grid>
      <Grid item marginTop={5} xs={3}>
        <TextField
          fullWidth
          value={searchText}
          InputProps={{
            sx: {
              backgroundColor: "#ffffff",
            },
            endAdornment: (
              <Grid
                paddingTop={0.5}
                item
                onMouseOver={(e) => {
                  e.target.style.cursor = "pointer";
                }}
                onClick={() => {
                  setSearchText("");
                }}
              >
                <CloseIcon fontSize="medium" />
              </Grid>
            ),
          }}
          size="small"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></TextField>
      </Grid>

      <Grid
        item
        fontSize={20}
        xs={12}
        fontWeight={"bold"}
        direction={"row"}
        container
        marginTop={5}
      >
        {numOfOccurences} posts&nbsp;
        <Grid item fontWeight={"normal"}>
          were found
        </Grid>
      </Grid>
      <span
        dangerouslySetInnerHTML={{ __html: SearchingAndHighliting() }}
      ></span>
    </Grid>
  );
}

export default App;
