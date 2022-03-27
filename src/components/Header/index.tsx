import { Box, Button, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { actualMenuContext } from "../provider/actualMenu";

export const Header = () => {
  const { actual, setActual } = useContext(actualMenuContext);
  return (
    <Box
      bgColor="white"
      p={[3, 6]}
      borderTopRadius="40px"
      borderBottomLeftRadius="40px"
      borderBottomRightRadius={["40px", "0"]}
      position={["fixed", "relative"]}
      top="10px"
      left={0}
      right={0}
      margin={["0 auto", "0 0 20px 0"]}
      zIndex={1000}
      w={["98%", "98%", "70%", "60%", "40%"]}
      mb={4}
      shadow="md"
    >
      <HStack spacing={[2, 6]}>
        <Button
          colorScheme="blue"
          variant={actual === 0 ? "solid" : "ghost"}
          onClick={() => setActual(0)}
          fontSize={["xs", "xs", "md", "lg"]}
          textTransform="uppercase"
        >
          Sobre
        </Button>
        <Button
          colorScheme="blue"
          variant={actual === 1 ? "solid" : "ghost"}
          onClick={() => setActual(1)}
          fontSize={["xs", "xs", "md", "lg"]}
          textTransform="uppercase"
        >
          Resume
        </Button>
        <Button
          colorScheme="blue"
          variant={actual === 2 ? "solid" : "ghost"}
          onClick={() => setActual(2)}
          fontSize={["xs", "xs", "md", "lg"]}
          textTransform="uppercase"
        >
          Portfolio
        </Button>
        {/* <Button colorScheme="blue" variant="ghost" textTransform="uppercase">
          Blog
        </Button> */}
        <Button
          colorScheme="blue"
          variant={actual === 3 ? "solid" : "ghost"}
          onClick={() => setActual(3)}
          fontSize={["xs", "xs", "md", "lg"]}
          textTransform="uppercase"
        >
          Contato
        </Button>
      </HStack>
    </Box>
  );
};
