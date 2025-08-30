import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { TrendingUp, Users, BarChart3 } from "lucide-react";

const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const Benefits = () => {
  return (
    <Box
      as="section"
      id="beneficios"
      py={20}
      bgGradient={`linear(to-br, ${colors.primary}10, ${colors.secondary}10)`}
    >
      <Container maxW="container.xl" px={4}>
        <VStack gap={16} textAlign="center">
          {/* Header centralizado */}
          <VStack gap={6} maxW="3xl" mx="auto">
            <Heading size="2xl" lineHeight="tight">
              <Text as="span" color="gray.900">
                Resultados que
              </Text>
              <br />
              <Text
                as="span"
                bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                bgClip="text"
              >
                você pode medir
              </Text>
            </Heading>

            <Text fontSize="xl" color="gray.600" lineHeight="relaxed">
              Descubra como o Wise Park pode revolucionar seu negócio com resultados tangíveis e mensuráveis.
            </Text>
          </VStack>

          {/* Grid principal com conteúdo e imagem */}
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={16}
            alignItems="center"
            w="full"
          >
            {/* Lado esquerdo - Benefícios */}
            <VStack align="start" gap={8} textAlign="left">
              <VStack align="start" gap={6} w="full">
                <HStack align="start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon as={TrendingUp} h={6} w={6} color="white" />
                  </Box>
                  <VStack align="start" gap={2} flex={1}>
                    <Heading size="md" color="gray.900">
                      Automatização Completa
                    </Heading>
                    <Text color="gray.600" lineHeight="relaxed">
                      Elimine processos manuais e reduza erros operacionais com
                      nossa automação inteligente. Aumente a eficiência em até 80%.
                    </Text>
                  </VStack>
                </HStack>

                <HStack align="start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon as={Users} h={6} w={6} color="white" />
                  </Box>
                  <VStack align="start" gap={2} flex={1}>
                    <Heading size="md" color="gray.900">
                      Experiência Premium
                    </Heading>
                    <Text color="gray.600" lineHeight="relaxed">
                      Ofereça aos seus clientes uma experiência moderna e
                      conveniente que fideliza e aumenta a satisfação.
                    </Text>
                  </VStack>
                </HStack>

                <HStack align="start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon as={BarChart3} h={6} w={6} color="white" />
                  </Box>
                  <VStack align="start" gap={2} flex={1}>
                    <Heading size="md" color="gray.900">
                      Controle Total
                    </Heading>
                    <Text color="gray.600" lineHeight="relaxed">
                      Tenha visibilidade completa do seu negócio com relatórios em
                      tempo real e insights valiosos para tomada de decisão.
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>

            {/* Lado direito - Imagem/Ilustração */}
            <Box
              display={{ base: "none", lg: "block" }}
              position="relative"
              textAlign="center"
            >
              <Box
                bgGradient={`linear(to-br, ${colors.primary}20, ${colors.secondary}20)`}
                borderRadius="3xl"
                p={8}
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  right: "-20px",
                  bottom: "-20px",
                  bgGradient: `linear(to-br, ${colors.primary}10, ${colors.secondary}10)`,
                  borderRadius: "3xl",
                  zIndex: -1,
                }}
              >
                <VStack gap={6}>
                  <Box
                    bg="white"
                    borderRadius="2xl"
                    p={6}
                    boxShadow="xl"
                    transform="rotate(3deg)"
                    _hover={{ transform: "rotate(0deg) scale(1.05)" }}
                    transition="all 0.3s ease"
                  >
                    <Icon as={TrendingUp} h={16} w={16} color={colors.primary} mb={4} />
                    <Text fontSize="lg" fontWeight="bold" color="gray.800">
                      +80% Eficiência
                    </Text>
                  </Box>
                  
                  <Box
                    bg="white"
                    borderRadius="2xl"
                    p={6}
                    boxShadow="xl"
                    transform="rotate(-2deg)"
                    _hover={{ transform: "rotate(0deg) scale(1.05)" }}
                    transition="all 0.3s ease"
                  >
                    <Icon as={Users} h={16} w={16} color={colors.secondary} mb={4} />
                    <Text fontSize="lg" fontWeight="bold" color="gray.800">
                      +95% Satisfação
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Benefits;
