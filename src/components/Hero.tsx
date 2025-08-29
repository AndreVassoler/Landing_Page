import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { ArrowRightIcon, CalendarIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Car, Users, CreditCard, Star, Play } from "lucide-react";

const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const Hero = () => {
  return (
    <Box as="section" pt={24} pb={20} bg="gray.50" position="relative" overflow="hidden">
      {/* Background decoration */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="300px"
        h="300px"
        bgGradient={`radial(circle, ${colors.primary}10, transparent)`}
        borderRadius="full"
        opacity={0.6}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="200px"
        h="200px"
        bgGradient={`radial(circle, ${colors.secondary}10, transparent)`}
        borderRadius="full"
        opacity={0.4}
        zIndex={0}
      />

      <Container maxW="container.xl" px={4} position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={16}
          alignItems="center"
        >
          <VStack align="start" gap={8}>
            <VStack align="start" gap={6}>
              <Heading as="h1" size="2xl" lineHeight="tight" fontWeight="bold">
                <Text as="span" color="gray.900">
                  Gerencie seu
                </Text>
                <br />
                <Text
                  as="span"
                  bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                  bgClip="text"
                >
                  Estacionamento
                </Text>
                <br />
                <Text as="span" color="gray.900">
                  de uma forma
                </Text>
                <br />
                <Text as="span" color={colors.primary}>
                  inteligente
                </Text>
              </Heading>

              <Text
                fontSize="xl"
                color="gray.600"
                maxW="lg"
                lineHeight="relaxed"
              >
                Gerencie vagas, reservas, mensalistas e pagamentos de forma automatizada.
                Aumente sua receita e proporcione a melhor experiência para seus
                clientes.
              </Text>
            </VStack>

            {/* Botões de CTA principais */}
            <VStack align="start" gap={6} w="full">
              <HStack gap={4} flexDir={{ base: "column", sm: "row" }}>
                <Button
                  size="lg"
                  bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                  color="white"
                  _hover={{
                    bgGradient: `linear(to-r, ${colors.primary}dd, ${colors.secondary}dd)`,
                    transform: "translateY(-2px)",
                    boxShadow: "2xl",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  rightIcon={<ArrowRightIcon />}
                  boxShadow="xl"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="bold"
                  transition="all 0.3s ease"
                >
                  Começar Teste Grátis
                </Button>
                
                {/*
                <Button
                  variant="outline"
                  size="lg"
                  color={colors.primary}
                  borderColor={colors.primary}
                  borderWidth="2px"
                  _hover={{ 
                    bg: `${colors.primary}10`,
                    transform: "translateY(-2px)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  leftIcon={<Icon as={Play} />}
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  transition="all 0.3s ease"
                >
                  Ver Demonstração
                </Button>
                */}
              </HStack>

              {/* Benefícios destacados */}
              <HStack gap={6} pt={2} flexWrap="wrap">
                <HStack gap={2} bg="white" px={4} py={2} borderRadius="full" boxShadow="sm">
                  <CheckCircleIcon color={colors.primary} />
                  <Text fontSize="sm" color="gray.700" fontWeight="medium">
                    14 dias grátis
                  </Text>
                </HStack>
                <HStack gap={2} bg="white" px={4} py={2} borderRadius="full" boxShadow="sm">
                  <CheckCircleIcon color={colors.primary} />
                  <Text fontSize="sm" color="gray.700" fontWeight="medium">
                    Suporte completo
                  </Text>
                </HStack>
                <HStack gap={2} bg="white" px={4} py={2} borderRadius="full" boxShadow="sm">
                  <Star color={colors.secondary} />
                  <Text fontSize="sm" color="gray.700" fontWeight="medium">
                    Sem compromisso
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>

          {/* Lado direito - Cards de funcionalidades */}
          <Box position="relative">
            <Box
              bgGradient={`linear(to-br, ${colors.primary}10, ${colors.secondary}10)`}
              borderRadius="3xl"
              p={8}
              boxShadow="2xl"
              border="1px"
              borderColor={`${colors.primary}20`}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-2px",
                left: "-2px",
                right: "-2px",
                bottom: "-2px",
                bgGradient: `linear(to-br, ${colors.primary}, ${colors.secondary})`,
                borderRadius: "3xl",
                zIndex: -1,
                opacity: 0.3,
              }}
            >
              <Grid templateColumns="1fr 1fr" gap={6}>
                <Box 
                  bg="white" 
                  borderRadius="2xl" 
                  p={6} 
                  boxShadow="xl"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                  }}
                  transition="all 0.3s ease"
                  border="1px"
                  borderColor="gray.100"
                >
                  <Icon as={Car} h={12} w={12} color={colors.primary} mb={4} />
                  <Heading size="md" mb={2} color="gray.800">
                    Controle de Vagas
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    Visualize vagas em tempo real
                  </Text>
                </Box>

                <Box 
                  bg="white" 
                  borderRadius="2xl" 
                  p={6} 
                  boxShadow="xl"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                  }}
                  transition="all 0.3s ease"
                  border="1px"
                  borderColor="gray.100"
                >
                  <Icon
                    as={Users}
                    h={12}
                    w={12}
                    color={colors.secondary}
                    mb={4}
                  />
                  <Heading size="md" mb={2} color="gray.800">
                    Sistema de Reservas
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    Reservas antecipadas
                  </Text>
                </Box>

                <Box 
                  bg="white" 
                  borderRadius="2xl" 
                  p={6} 
                  boxShadow="xl"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                  }}
                  transition="all 0.3s ease"
                  border="1px"
                  borderColor="gray.100"
                >
                  <Icon
                    as={CreditCard}
                    h={12}
                    w={12}
                    color={colors.primary}
                    mb={4}
                  />
                  <Heading size="md" mb={2} color="gray.800">
                    Pagamentos Online
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    Integração completa
                  </Text>
                </Box>

                <Box 
                  bg="white" 
                  borderRadius="2xl" 
                  p={6} 
                  boxShadow="xl"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                  }}
                  transition="all 0.3s ease"
                  border="1px"
                  borderColor="gray.100"
                >
                  <Icon
                    as={CalendarIcon}
                    h={12}
                    w={12}
                    color={colors.primary}
                    mb={4}
                  />
                  <Heading size="md" mb={2} color="gray.800">
                    Mensalistas
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    Gerencie seus mensalistas
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
