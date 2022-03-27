import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

export const Contact = () => {
  return (
    <Stack
      spacing={6}
      maxHeight="700px"
      // maxWidth="650px"
      overflowY="auto"
      textAlign="left"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray.900",
          borderRadius: "24px",
        },
      }}
    >
      {/* <Text>Oi</Text> */}
      <Text as="span" fontFamily="Inter" fontWeight="600" fontSize="4xl">
        Contato
      </Text>
      <Box h="5px" w="40px" bgColor="#304CFD" borderRadius="6px">
        <Box h="5px" w="16px" bgColor="#FF965D" borderRadius="6px"></Box>
      </Box>

      <HStack spacing={6}>
        <Link href="https://github.com/BrunoFelipe17" isExternal>
          <Icon as={RiGithubFill} w={10} h={10} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bruno-felipe-218aa3192/"
          isExternal
        >
          <Icon as={RiLinkedinFill} w={10} h={10} />
        </Link>

        <Link href="mailto:bruno.felipe17@hotmail.com" isExternal>
          <Icon as={RiMailFill} w={10} h={10} />
        </Link>
      </HStack>
    </Stack>
  );
};
