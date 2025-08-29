import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { ArrowRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Star, TrendingUp, Users, Play } from "lucide-react";

const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const CTA = () => {
  return (
    <Box
      as="section"
      py={24}
      bgGradient={`linear(135deg, ${colors.primary}, ${colors.secondary})`}
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        w="600px"
        h="600px"
        bg="whiteAlpha.100"
        borderRadius="full"
        opacity={0.3}
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="-15%"
        w="400px"
        h="400px"
        bg="whiteAlpha.100"
        borderRadius="full"
        opacity={0.2}
      />

      <Container maxW="container.xl" px={4} position="relative" zIndex={1}>
        <VStack spacing={12} maxW="5xl" mx="auto" textAlign="center">
          {/* Badge de destaque */}
          <Badge
            px={6}
            py={3}
            bg="whiteAlpha.200"
            color="white"
            borderRadius="full"
            fontSize="md"
            fontWeight="bold"
            letterSpacing="wide"
            backdropFilter="blur(10px)"
            border="1px"
            borderColor="whiteAlpha.300"
          >
          </Badge>

          <VStack gap={8}>
            <Heading size="2xl" fontWeight="bold" lineHeight="tight">
              Pronto para revolucionar seu estacionamento?
            </Heading>

            <Text fontSize="2xl" opacity={0.95} maxW="3xl" lineHeight="relaxed">
              Junte-se a centenas de proprietários que já transformaram seus
              negócios com o Wise Park. Comece seu teste gratuito hoje mesmo e veja 
              a diferença em apenas 14 dias.
            </Text>
          </VStack>

          {/* Botões principais */}
          <VStack gap={8} w="full">
            <HStack
              spacing={6}
              flexDir={{ base: "column", sm: "row" }}
              justify="center"
              w="full"
            >
              <Button
                bg="white"
                color={colors.primary}
                _hover={{ 
                  bg: "gray.50",
                  transform: "translateY(-3px)",
                  boxShadow: "2xl",
                }}
                _active={{
                  transform: "translateY(-1px)",
                }}
                size="xl"
                rightIcon={<ArrowRightIcon />}
                px={10}
                py={8}
                fontSize="xl"
                fontWeight="bold"
                borderRadius="xl"
                boxShadow="xl"
                transition="all 0.3s ease"
                minW="280px"
              >
                Começar Teste Grátis de 14 Dias
              </Button>
              
              {/*
              <Button
                variant="outline"
                size="xl"
                borderColor="white"
                borderWidth="3px"
                color="white"
                _hover={{ 
                  bg: "whiteAlpha.200",
                  transform: "translateY(-3px)",
                  boxShadow: "xl",
                }}
                _active={{
                  transform: "translateY(-1px)",
                }}
                leftIcon={<Icon as={Play} />}
                px={10}
                py={8}
                fontSize="xl"
                fontWeight="semibold"
                borderRadius="xl"
                transition="all 0.3s ease"
                minW="280px"
              >
                Agendar Demonstração
              </Button>
              */}
            </HStack>
            

            {/* Benefícios destacados */}
            <VStack gap={6} pt={8}>
              <HStack
                spacing={{ base: 2, sm: 0 }}
                direction={{ base: "column", sm: "row" }}
                align="center"
                justify="center"
                fontSize="lg"
                opacity={0.95}
                flexWrap="wrap"
                gap={8}
              >
                <HStack spacing={3} bg="whiteAlpha.200" px={6} py={3} borderRadius="full" backdropFilter="blur(10px)">
                  <CheckCircleIcon h={5} w={5} color="white" />
                  <Text fontWeight="semibold">Sem compromisso</Text>
                </HStack>
                <HStack spacing={3} bg="whiteAlpha.200" px={6} py={3} borderRadius="full" backdropFilter="blur(10px)">
                  <CheckCircleIcon h={5} w={5} color="white" />
                  <Text fontWeight="semibold">Configuração em minutos</Text>
                </HStack>
                <HStack spacing={3} bg="whiteAlpha.200" px={6} py={3} borderRadius="full" backdropFilter="blur(10px)">
                  <CheckCircleIcon h={5} w={5} color="white" />
                  <Text fontWeight="semibold">Suporte completo incluído</Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>

          {/* Estatísticas de confiança */}
          <VStack gap={8} pt={12} w="full">
            <Text fontSize="lg" opacity={0.8} fontWeight="medium">
              Confiado por centenas de estacionamentos
            </Text>
            
            <HStack gap={12} justify="center" flexWrap="wrap">
              <VStack gap={2} textAlign="center">
                <HStack gap={2}>
                  <Icon as={Star} h={6} w={6} color="yellow.300" fill="yellow.300" />
                  <Text fontSize="2xl" fontWeight="bold">4.9/5</Text>
                </HStack>
                <Text fontSize="sm" opacity={0.8}>Avaliação dos Clientes</Text>
              </VStack>
              
              <VStack gap={2} textAlign="center">
                <HStack gap={2}>
                  <Icon as={TrendingUp} h={6} w={6} color="white" />
                  <Text fontSize="2xl" fontWeight="bold">+80%</Text>
                </HStack>
                <Text fontSize="sm" opacity={0.8}>Aumento na Receita</Text>
              </VStack>
              
              <VStack gap={2} textAlign="center">
                <HStack gap={2}>
                  <Icon as={Users} h={6} w={6} color="white" />
                  <Text fontSize="2xl" fontWeight="bold">500+</Text>
                </HStack>
                <Text fontSize="sm" opacity={0.8}>Estacionamentos Ativos</Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default CTA;
