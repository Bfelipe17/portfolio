import { Box, Heading, Stack, Text, Image, SimpleGrid } from "@chakra-ui/react";

export const Portfolio = () => {
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
      <Text as="span" fontFamily="Inter" fontWeight="600" fontSize="4xl">
        Portfolio
      </Text>
      <Box h="5px" w="40px" bgColor="#304CFD" borderRadius="6px">
        <Box h="5px" w="16px" bgColor="#FF965D" borderRadius="6px"></Box>
      </Box>

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        <Stack
          align="center"
          p={8}
          borderRadius="30px"
          border="3px solid #F5F8F9"
        >
          <Text
            as="h3"
            fontSize={["xl", "2xl"]}
            fontWeight="bold"
            textAlign="center"
          >
            Rockelivery
          </Text>
          <Text textAlign="center" fontSize={["md", "xl"]}>
            API de delivery desenvolvida em Elixir
          </Text>
        </Stack>
        <Stack
          align="center"
          p={8}
          borderRadius="30px"
          border="3px solid #F5F8F9"
        >
          <Text
            as="h3"
            fontSize={["xl", "2xl"]}
            fontWeight="bold"
            textAlign="center"
          >
            Rentx
          </Text>
          <Text textAlign="center" fontSize={["md", "xl"]}>
            API de aluguel de carros desenvolvida em NodeJS
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};
