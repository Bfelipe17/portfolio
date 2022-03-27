import { Box, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { actualMenuContext } from "../provider/actualMenu";
import { About } from "./About";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Resume } from "./Resume";

export const Content = () => {
  const { actual, setActual } = useContext(actualMenuContext);

  return (
    <Stack maxWidth={{ md: "380px", lg: "590px", xl: "650px", "2xl": "900px" }}>
      <Box p={[8, 8, 4, 12]}>
        <Carousel
          centerMode={false}
          showIndicators={false}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          onChange={(e) => {
            setActual(e);
          }}
          selectedItem={actual}
          swipeable={false}
        >
          <About />
          <Resume />
          <Portfolio />

          <Contact />
        </Carousel>
      </Box>
    </Stack>
  );
};
