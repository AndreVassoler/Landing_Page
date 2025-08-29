import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <VStack gap={8} textAlign="center">
        <Heading size="2xl">404 - Página não encontrada</Heading>
        <Text fontSize="xl" color="gray.600">
          A página que você está procurando não existe.
        </Text>
        <Button
          bgGradient="linear(to-r, blue.500, teal.500)"
          color="white"
          size="lg"
          _hover={{
            bgGradient: "linear(to-r, blue.600, teal.600)",
          }}
          onClick={() => window.history.back()}
        >
          Voltar
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound;
