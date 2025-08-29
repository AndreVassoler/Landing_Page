import { Box, Flex, Button, HStack, Container, Image } from "@chakra-ui/react";

const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      w="full"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex={50}
      backdropFilter="blur(8px)"
    >
      <Container maxW="container.xl" px={4}>
        <Flex py={4} align="center" position="relative">
          <Flex align="center" gap={3} position="absolute" left={4}>
            <a href="/">
              <Image
                src="https://files.wisepark.com.br/default/logo_2.svg"
                alt="WisePark Logo"
                h={10}
                w="auto"
                objectFit="contain"
              />
            </a>
          </Flex>

          <Flex justify="center" flex={1}>
            <HStack gap={8} display={{ base: "none", md: "flex" }}>
              <Button
                variant="ghost"
                color={colors.primary}
                _hover={{ bg: `${colors.primary}10` }}
                onClick={() => {
                  document
                    .getElementById("recursos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Recursos
              </Button>
              <Button
                variant="ghost"
                color={colors.primary}
                _hover={{ bg: `${colors.primary}10` }}
                onClick={() => {
                  document
                    .getElementById("beneficios")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Benefícios
              </Button>
              <Button
                variant="ghost"
                color={colors.primary}
                _hover={{ bg: `${colors.primary}10` }}
                onClick={() => {
                  document
                    .getElementById("planos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Planos
              </Button>
              <Button
                variant="ghost"
                color={colors.primary}
                _hover={{ bg: `${colors.primary}10` }}
                onClick={() => {
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contato
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
