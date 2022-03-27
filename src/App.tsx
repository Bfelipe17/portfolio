import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Image,
  Flex,
  extendTheme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Curriculum } from "./components/Curriculum";
import bgTop from "./assets/bg_top.png";
import bgBottom from "./assets/bg_bottom.png";
import { ActualMenuProvider } from "./components/provider/actualMenu";

const customTheme = extendTheme({
  colors: {
    blue: {
      "50": "#E6E9FF",
      "100": "#B8C2FE",
      "200": "#8B9BFE",
      "300": "#5D73FD",
      "400": "#304CFD",
      "500": "#0225FD",
      "600": "#021DCA",
      "700": "#011698",
      "800": "#010F65",
      "900": "#000733",
    },
  },
});

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <ActualMenuProvider>
      <Image src={bgTop} position="absolute" top="0" left="0" />
      <Image src={bgBottom} position="absolute" bottom="0" right="0" />
      <Box
        fontSize="xl"
        h={["100%", "100vh"]}
        bgGradient="linear-gradient(113.46deg, #00F1E2 2.91%, #2CD5EF 90.19%);"
      >
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        {/* <Grid minH="100vh" p={3}> */}

        <Flex
          width={["90%", "90%", "90%", "90%", "70%"]}
          margin="0 auto"
          maxWidth="1280px"
          zIndex="9999"
        >
          <Curriculum />
        </Flex>

        {/* </Grid> */}
      </Box>
    </ActualMenuProvider>
  </ChakraProvider>
);
