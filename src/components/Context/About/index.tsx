import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiCodeSSlashLine } from "react-icons/ri";

export const About = () => {
  return (
    <Stack
      spacing={6}
      maxHeight="700px"
      // maxWidth="65%"
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
        Sobre mim
      </Text>
      <Box h="5px" w="40px" bgColor="#304CFD" borderRadius="6px">
        <Box h="5px" w="16px" bgColor="#FF965D" borderRadius="6px"></Box>
      </Box>
      <Stack spacing={4} fontFamily="Inter">
        <Text fontSize={["md", "lg"]}>Prazer, eu sou o Bruno.</Text>
        <Text fontSize={["md", "lg"]}>
          Atualmente sou um{" "}
          <Text as="del" color="gray.500">
            amante de linguagens funcionais
          </Text>{" "}
          Desenvolvedor Back-end, e nas horas vagas me arrisco em criar alguns
          sites. Adoro solucionar problemas, seja por código ou por outra
          maneira, meu foco sempre será transformar grandes problemas em
          soluções simples.
        </Text>
        {/* <Text>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </Text> */}
      </Stack>
      <Heading as="h2" fontFamily="Inter" fontWeight="600" size="lg">
        O que eu faço
      </Heading>
      <SimpleGrid minChildWidth={["100%", "320px"]} spacing={10}>
        <Stack
          align="center"
          p={8}
          borderRadius="30px"
          border="3px solid #F5F8F9"
        >
          <Icon as={RiCodeSSlashLine} />
          <Text
            as="h3"
            fontSize={["xl", "2xl"]}
            fontWeight="bold"
            textAlign="center"
          >
            Desenvolvimento Web
          </Text>
          <Text textAlign="center" fontSize={["md", "lg"]}>
            Desenvolvimento de sites e APIs de alta qualidade a nível
            profissional.
          </Text>
        </Stack>
        <Stack
          align="center"
          p={8}
          borderRadius="30px"
          border="3px solid #F5F8F9"
        >
          <Icon as={RiCodeSSlashLine} />
          <Text
            as="h3"
            fontSize={["xl", "2xl"]}
            fontWeight="bold"
            textAlign="center"
          >
            Arquitetura de Software
          </Text>
          <Text textAlign="center" fontSize={["md", "xl"]}>
            Planejamento de soluções serverless e microsserviços na nuvem
          </Text>
        </Stack>
        <Stack
          align="center"
          p={8}
          borderRadius="30px"
          border="3px solid #F5F8F9"
        >
          <Icon as={RiCodeSSlashLine} />
          <Text
            as="h3"
            fontSize={["xl", "2xl"]}
            fontWeight="bold"
            textAlign="center"
          >
            Aulas particulares
          </Text>
          <Text textAlign="center" fontSize={["md", "xl"]}>
            Leciono aulas particulares de desenvolvimento de APIs e do básico da
            programação
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};
