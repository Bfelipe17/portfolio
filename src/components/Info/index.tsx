import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  RiCalendarEventLine,
  RiDownload2Line,
  RiGithubFill,
  RiLinkedinFill,
  RiMailLine,
  RiMapPinLine,
} from "react-icons/ri";

import personalImg from "../../assets/img.jpeg";

export const Info = () => {
  return (
    <Stack
      bgColor="#F5F8F9"
      p={[8, 8, 8, 12]}
      spacing={4}
      borderRadius="40px"
      align="center"
    >
      <Image
        src={personalImg}
        objectFit="cover"
        alt="Foto pessoal"
        borderRadius="40px"
        boxSize="180px"
      />
      <Text as="p" fontSize={["3xl", "4xl"]} fontFamily="Merriweather">
        Bruno{" "}
        <Text as="span" fontWeight="900">
          Felipe
        </Text>
      </Text>
      <Box bgColor="#E9EDF0" pt={2} pb={2} pl={4} pr={4} borderRadius="40px">
        <Text color="gray.500">Desenvolvedor</Text>
      </Box>
      <HStack spacing={6}>
        <Link href="https://github.com/BrunoFelipe17" isExternal>
          <Icon as={RiGithubFill} w={6} h={6} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bruno-felipe-218aa3192/"
          isExternal
        >
          <Icon as={RiLinkedinFill} w={6} h={6} />
        </Link>
      </HStack>
      <Box>
        <List
          textAlign="left"
          spacing={6}
          fontFamily="Inter"
          fontWeight="400"
          color="gray.600"
          fontSize="sm"
        >
          <ListItem>
            <ListIcon as={RiCalendarEventLine} /> 17 de Julho
          </ListItem>
          <ListItem>
            <ListIcon as={RiMapPinLine} /> São Paulo, Brasil
          </ListItem>
          <ListItem>
            <ListIcon as={RiMailLine} /> bruno.felipe17@hotmail.com
          </ListItem>
        </List>
      </Box>
      <Link
        href="https://drive.google.com/file/d/1yA2pv5dUMwmaTw3Fe6rt5sSj1PWknaMI/view?usp=sharing"
        target="_blank"
      >
        <Button
          size="lg"
          w="100%"
          borderRadius="20px"
          leftIcon={<Icon as={RiDownload2Line} />}
          colorScheme="blue"
          fontSize="2xl"
          fontFamily="Inter"
          fontWeight="500"
          boxShadow="lg"
          p={8}
        >
          Download CV
        </Button>
      </Link>
    </Stack>
    // <Flex
    //
    //
    //
    //   flexDirection="column"
    //   align="center"
    // >

    // </Flex>
  );
};
