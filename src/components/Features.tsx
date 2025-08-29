import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import {
  Clock,
  BarChart3,
  Shield,
  Bell,
  Receipt,
  Globe,
} from "lucide-react";

const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Controle em Tempo Real",
      description:
        "Tenha o controle das vagas em tempo real para ter máxima eficiência e otimização do seu estacionamento.",
    },
    {
      icon: BarChart3,
      title: "Relatórios Financeiros",
      description:
        "Gere relatórios com facilidade e acompanhe suas receitas e despesas detalhadas para tomada de decisão.",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Tenha seus dados protegidos com criptografia de ponta e backup em nuvem com 99.9% de disponibilidade.",
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description:
        "SMS, email e WhatsApp para manter clientes sempre informados sobre reservas e pagamentos.",
    },
    {
      icon: Receipt,
      title: "Tickets Digitais",
      description:
        "Elimine tickets físicos com nosso sistema de tickets digitais e QR codes para entrada e saída.",
    },
    {
      icon: Globe,
      title: "Múltiplas Filiais",
      description: "Gerencie suas filiais em uma única plataforma centralizada com controle total.",
    },
  ];

  return (
    <Box as="section" id="recursos" py={20} bg="white" position="relative">
      {/* Background decoration */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
        w="200px"
        h="200px"
        bgGradient={`radial(circle, ${colors.secondary}05, transparent)`}
        borderRadius="full"
        opacity={0.8}
      />
      
      <Container maxW="container.xl" px={4}>
        <VStack gap={16}>
          <VStack gap={6} textAlign="center" maxW="4xl" mx="auto">
            <Heading size="2xl" lineHeight="tight">
              <Text as="span" color="gray.900">
                Porque escolher o
              </Text>
              <br />
              <Text
                as="span"
                bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                bgClip="text"
              >
                Wise Park
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" lineHeight="relaxed">
              O Wise Park pode transformar a gestão do seu
              estacionamento com uma tecnologia de ponta e funcionalidades
              inteligentes que revolucionam o mercado.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {features.map((feature, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                p={8}
                boxShadow="lg"
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
                <VStack gap={6} align="start">
                  <Box
                    w={16}
                    h={16}
                    bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{
                      transform: "scale(1.1) rotate(5deg)",
                    }}
                    transition="all 0.3s ease"
                    boxShadow="lg"
                  >
                    <Icon as={feature.icon} h={8} w={8} color="white" />
                  </Box>
                  
                  <VStack gap={3} align="start">
                    <Heading size="md" color="gray.900" lineHeight="tight">
                      {feature.title}
                    </Heading>
                    <Text fontSize="md" color="gray.600" lineHeight="relaxed">
                      {feature.description}
                    </Text>
                  </VStack>
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
        </VStack>
      </Container>
    </Box>
  );
};

export default Features;
