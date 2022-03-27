import { Flex } from "@chakra-ui/react";
import { Content } from "../Context";
import { Header } from "../Header";
import { Info } from "../Info";

export const Curriculum = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      align="flex-end"
      h={["100%", "100vh"]}
      justifyContent="center"
      zIndex="10"
      margin={["100px 0 50px 0", 0]}
    >
      <Header />
      <Flex
        width="100%"
        bgColor="white"
        borderBottomRadius="40px"
        borderTopLeftRadius="40px"
        borderTopRightRadius={["40px", "0"]}
        shadow="lg"
        // flexDirection={{ md: "column", lg: "row" }}
        flexDirection={["column", "row"]}
      >
        <Info />
        <Content />
      </Flex>
    </Flex>
    // <Center height="100%">
    //   <Header />
    //   <p>Curriculum</p>
    // </Center>
  );
};
