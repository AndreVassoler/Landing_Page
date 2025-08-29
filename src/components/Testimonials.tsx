import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Star, Quote } from "lucide-react";

const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Proprietário - Estacionamento Central",
      content:
        "O Wise Park revolucionou nosso negócio. Aumentamos nossa receita em 250% no primeiro ano e nossos clientes adoram a praticidade das reservas online.",
      avatar: "CM",
      rating: 5,
      company: "Estacionamento Central",
      location: "São Paulo, SP",
    },
    {
      name: "Ana Silva",
      role: "Gestora - Park Tower Shopping",
      content:
        "Antes perdíamos muito tempo com controle manual. Agora tudo é automatizado e temos relatórios precisos em tempo real. Recomendo para todos.",
      avatar: "AS",
      rating: 5,
      company: "Park Tower Shopping",
      location: "Rio de Janeiro, RJ",
    },
    {
      name: "Roberto Santos",
      role: "Diretor - Rede Park Express",
      content:
        "Gerenciar 8 estacionamentos ficou muito mais fácil. A visão centralizada e os relatórios detalhados nos ajudam a tomar decisões estratégicas.",
      avatar: "RS",
      rating: 5,
      company: "Rede Park Express",
      location: "Belo Horizonte, MG",
    },
  ];

  return (
    <Box as="section" py={20} bgGradient="linear(to-br, gray.50, white)" position="relative">
      {/* Background decoration */}
      <Box
        position="absolute"
        top="20%"
        left="10%"
        w="200px"
        h="200px"
        bgGradient={`radial(circle, ${colors.primary}05, transparent)`}
        borderRadius="full"
        opacity={0.6}
      />
      
      <Container maxW="container.xl" px={4}>
        <VStack gap={16}>
          <VStack gap={6} textAlign="center" maxW="4xl" mx="auto">
            <Badge
              px={4}
              py={2}
              bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
              color="white"
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="wide"
            >
            </Badge>
            
            <Heading size="2xl" lineHeight="tight">
              <Text as="span" color="gray.900">
                O que nossos clientes
              </Text>
              <br />
              <Text
                as="span"
                bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                bgClip="text"
              >
                estão dizendo
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" lineHeight="relaxed">
              Histórias reais de proprietários que transformaram seus
              estacionamentos com o Wise Park. Veja os resultados que você também pode alcançar.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} maxW="6xl" w="full">
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                p={8}
                boxShadow="xl"
                _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-8px)",
                  borderColor: colors.primary,
                }}
                transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                border="2px"
                borderColor="gray.100"
                position="relative"
                overflow="hidden"
              >
                {/* Quote icon background */}
                <Box
                  position="absolute"
                  top={-4}
                  right={-4}
                  fontSize="8xl"
                  color="gray.100"
                  fontFamily="serif"
                  lineHeight={1}
                  opacity={0.3}
                >
                  "
                </Box>

                <VStack gap={6} align="start" position="relative" zIndex={1}>
                  {/* Rating */}
                  <HStack gap={1} justify="center" w="full">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        as={Star}
                        h={5}
                        w={5}
                        color="yellow.400"
                        fill="yellow.400"
                      />
                    ))}
                  </HStack>

                  {/* Content */}
                  <Text
                    color="gray.600"
                    lineHeight="relaxed"
                    fontStyle="italic"
                    fontSize="lg"
                    textAlign="center"
                    position="relative"
                  >
                    "{testimonial.content}"
                  </Text>

                  {/* Company info */}
                  <VStack gap={2} align="center" w="full" pt={2}>
                    <Text
                      fontSize="sm"
                      color={colors.primary}
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      {testimonial.company}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="gray.500"
                      textAlign="center"
                    >
                      {testimonial.location}
                    </Text>
                  </VStack>

                  {/* Author */}
                  <HStack gap={3} justify="center" w="full" pt={2}>
                    <Avatar
                      name={testimonial.name}
                      bgGradient={`linear(135deg, ${colors.primary}, ${colors.secondary})`}
                      color="white"
                      size="md"
                      boxShadow="lg"
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <VStack gap={1} align="start">
                      <Text
                        fontWeight="bold"
                        color="gray.900"
                        fontSize="md"
                      >
                        {testimonial.name}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {testimonial.role}
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>

                {/* Linha decorativa */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                  transform="scaleX(0)"
                  _hover={{
                    transform: "scaleX(1)",
                  }}
                  transition="transform 0.3s ease"
                  transformOrigin="left"
                />
              </Box>
            ))}
          </SimpleGrid>

          {/* CTA adicional */}
          <VStack gap={6} textAlign="center" bg="white" p={12} borderRadius="2xl" w="full" boxShadow="lg" border="1px" borderColor="gray.100">
            <Heading size="lg" color="gray.800">
              Junte-se aos nossos clientes satisfeitos
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Transforme seu estacionamento como eles fizeram. Comece seu teste gratuito hoje mesmo.
            </Text>
            <Box
              bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
              color="white"
              px={8}
              py={4}
              borderRadius="full"
              fontWeight="bold"
              fontSize="lg"
              cursor="pointer"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "2xl",
              }}
              transition="all 0.3s ease"
            >
              Começar Agora
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Testimonials;
