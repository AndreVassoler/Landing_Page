import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";

// Custom color palette
const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const Footer = () => {
  return (
    <Box as="footer" id="contato" bg="gray.900" color="white" py={16}>
      <Container maxW="container.xl" px={4}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <VStack spacing={4} align="start">
            <HStack spacing={2}>
              <Box
                w={8}
                h={8}
                bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontWeight="bold" color="white">
                  P
                </Text>
              </Box>
              <Text fontSize="xl" fontWeight="bold">
                Wise Park
              </Text>
            </HStack>
            <Text color="gray.300" fontSize="sm" lineHeight="relaxed">
              A solução completa para gestão inteligente de estacionamentos.
              Transforme seu negócio com tecnologia de ponta.
            </Text>
          </VStack>

          <VStack spacing={4} align="start">
            <Heading size="md" fontWeight="semibold">
              Produto
            </Heading>
            <VStack spacing={2} align="start" fontSize="sm" color="gray.300">
              <Link
                onClick={() => {
                  document
                    .getElementById("recursos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                _hover={{ color: "white" }}
                cursor="pointer"
              >
                Recursos
              </Link>
              <Link
                onClick={() => {
                  document
                    .getElementById("planos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                _hover={{ color: "white" }}
                cursor="pointer"
              >
                Planos
              </Link>
              <Link href="#" _hover={{ color: "white" }}>
                Integrações
              </Link>
              <Link href="#" _hover={{ color: "white" }}>
                API
              </Link>
            </VStack>
          </VStack>

          <VStack spacing={4} align="start">
            <Heading size="md" fontWeight="semibold">
              Empresa
            </Heading>
            <VStack spacing={2} align="start" fontSize="sm" color="gray.300">
              <Link href="#" _hover={{ color: "white" }}>
                Sobre Nós
              </Link>
              <Link href="#" _hover={{ color: "white" }}>
                Blog
              </Link>
              <Link href="#" _hover={{ color: "white" }}>
                Carreiras
              </Link>
              <Link
                onClick={() => {
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                _hover={{ color: "white" }}
                cursor="pointer"
              >
                Contato
              </Link>
            </VStack>
          </VStack>

          <VStack spacing={4} align="start">
            <Heading size="md" fontWeight="semibold">
              Suporte
            </Heading>
            <VStack spacing={2} align="start" fontSize="sm" color="gray.300">
              <Link href="#" _hover={{ color: "white" }}>
                Central de Ajuda
              </Link>
              <Link href="#" _hover={{ color: "white" }}>
                Documentação
              </Link>
              <Link href="#" _hover={{ color: "white" }}>
                Status
              </Link>
              <Link href="#" _hover={{ color: "white" }}>
                Fale Conosco
              </Link>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Box borderTopWidth="1px" borderColor="gray.700" mt={12} pt={8}>
          <VStack
            spacing={{ base: 4, md: 0 }}
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
          >
            <Text color="gray.400" fontSize="sm">
              © 2024 Wise Park. Todos os direitos reservados.
            </Text>
            <HStack spacing={6} mt={{ base: 4, md: 0 }}>
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "white" }}
                fontSize="sm"
              >
                Privacidade
              </Link>
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "white" }}
                fontSize="sm"
              >
                Termos
              </Link>
              <Link
                href="#"
                color="gray.400"
                _hover={{ color: "white" }}
                fontSize="sm"
              >
                Cookies
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
