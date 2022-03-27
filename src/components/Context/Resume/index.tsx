import {
  Box,
  Circle,
  Heading,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import experienceImg from "../../../assets/Experience.png";
import educationImg from "../../../assets/Education.png";

export const Resume = () => {
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
      <p
        style={{
          fontFamily: "Inter",
          fontSize: "2.25rem",
          fontWeight: "bold",
        }}
      >
        Resume
      </p>
      {/* <Text
        as="span"
        fontFamily="Inter"
        fontWeight="600"
        fontSize="4xl"
        width="300px"
      >
        
      </Text> */}
      <Box h="5px" w="40px" bgColor="#304CFD" borderRadius="6px">
        <Box h="5px" w="16px" bgColor="#FF965D" borderRadius="6px"></Box>
      </Box>
      <Stack spacing={8} fontFamily="Inter">
        <HStack>
          <Image
            src={experienceImg}
            boxSize="40px"
            width="40px !important"
            height="40px !important"
            m={2}
          />
          <Heading as="h3" fontSize="2xl">
            Experiência
          </Heading>
        </HStack>
        <HStack alignItems="flex-start">
          <Stack marginTop="4px">
            <Circle bg="#EAEDFF" size="20px">
              <Circle bg="#304CFD" size="10px"></Circle>
            </Circle>
          </Stack>
          <Stack spacing={2}>
            <Text fontWeight="semibold" fontSize="lg">
              Analista de Desenvolvimento Pleno
            </Text>
            <Text fontWeight="400" fontSize={["xs", "md"]} color="gray.500">
              2022 - Presente | Escola Móbile
            </Text>
            <UnorderedList listStyleType="none" fontSize={["md", "lg"]}>
              <ListItem>
                • Desenvolvimento de aplicações em Elixir e NodeJs;
              </ListItem>
              <ListItem>
                • Desenvolvimento de aplicações focadas em AWS;
              </ListItem>
              <ListItem>
                • Planejamento da arquitetura de novas aplicações;
              </ListItem>
              <ListItem>• Manutenção de sistemas Monolíticos;</ListItem>
              <ListItem>• Análise de implementação de Microsserviços.</ListItem>
            </UnorderedList>
          </Stack>
        </HStack>

        <HStack alignItems="flex-start">
          <Stack marginTop="4px">
            <Circle bg="#EAEDFF" size="20px">
              <Circle bg="#304CFD" size="10px"></Circle>
            </Circle>
          </Stack>
          <Stack spacing={2}>
            <Text fontWeight="semibold" fontSize="lg">
              Integrador de Tecnologia
            </Text>
            <Text fontWeight="400" fontSize={["xs", "md"]} color="gray.500">
              2020 - 2022 | Escola Móbile
            </Text>
            <UnorderedList listStyleType="none" fontSize={["md", "lg"]}>
              <ListItem>
                • Promover o uso da tecnologia para alcançar os objetivos do
                currículo de letramento digital;
              </ListItem>
              <ListItem>
                • Estimular o Pensamento Computacional nos estudantes;
              </ListItem>
              <ListItem>
                • Estimular o uso de tecnologias nas salas de aula explorando os
                currículos de cada matéria, atuando junto dos professores e
                coordenadores;
              </ListItem>
              <ListItem>
                • Pesquisa de novas tecnologias para a realização de atividades
                nas salas de aula;
              </ListItem>
              <ListItem>
                • Suporte para a realização de atividades que envolvem
                tecnologia;
              </ListItem>
              <ListItem>
                • Criação de aplicativos e jogos educacionais;
              </ListItem>
              <ListItem>
                • Orientar estudantes em projetos que visam a solução de algum
                problema
              </ListItem>
              <ListItem>• Desenvolvimento de aplicações em Elixir</ListItem>
            </UnorderedList>
          </Stack>
        </HStack>

        <HStack alignItems="flex-start">
          <Stack marginTop="4px">
            <Circle bg="#EAEDFF" size="20px">
              <Circle bg="#304CFD" size="10px"></Circle>
            </Circle>
          </Stack>
          <Stack spacing={2}>
            <Text fontWeight="semibold" fontSize="lg">
              Analista de Criação Jr
            </Text>
            <Text fontWeight="400" fontSize={["xs", "md"]} color="gray.500">
              2019 - 2020 | Colégio Visconde de Porto Seguro
            </Text>
          </Stack>
        </HStack>
      </Stack>

      <Stack spacing={8} fontFamily="Inter" paddingTop="40px">
        <HStack>
          <Image
            src={educationImg}
            boxSize="40px"
            width="40px !important"
            height="40px !important"
          />
          <Heading as="h3" fontSize="2xl">
            Educação
          </Heading>
        </HStack>
        <HStack alignItems="flex-start">
          <Stack marginTop="4px">
            <Circle bg="#EAEDFF" size="20px">
              <Circle bg="#304CFD" size="10px"></Circle>
            </Circle>
          </Stack>
          <Stack spacing={2}>
            <Text fontWeight="semibold" fontSize={["md", "lg"]}>
              Universidade Anhembi Morumbi
            </Text>
            <Text fontWeight="400" fontSize={["xs", "md"]} color="gray.500">
              2017 - 2020
            </Text>
            <Text fontSize={["md", "lg"]}>Ciência da Computação</Text>
          </Stack>
        </HStack>

        <HStack alignItems="flex-start">
          <Stack marginTop="4px">
            <Circle bg="#EAEDFF" size="20px">
              <Circle bg="#304CFD" size="10px"></Circle>
            </Circle>
          </Stack>
          <Stack spacing={2}>
            <Text fontWeight="semibold" fontSize="lg">
              Rocketseat
            </Text>
            <Text fontWeight="400" color="gray.500" fontSize={["xs", "md"]}>
              2021
            </Text>
            <Text fontSize={["md", "xl"]}>Bootcamp Ignite Elixir</Text>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};
