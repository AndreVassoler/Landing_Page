import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Badge,
  List,
  ListItem,
  ListIcon,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Check, Star, TrendingUp, Zap, Crown } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

const colors = {
  primary: "#43B7A0",
  secondary: "#45A2B0",
};

const Pricing = () => {
  const toast = useToast();
  
  // Estados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Estados de validação
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Estado de loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Função para validar email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Função para validar campo
  const validateField = (field: string, value: string) => {
    let error = '';
    
    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Nome é obrigatório';
        } else if (value.trim().length < 2) {
          error = 'Nome deve ter pelo menos 2 caracteres';
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          error = 'Email é obrigatório';
        } else if (!validateEmail(value)) {
          error = 'Email inválido';
        }
        break;
        
      case 'message':
        if (!value.trim()) {
          error = 'Mensagem é obrigatória';
        } else if (value.trim().length < 10) {
          error = 'Mensagem deve ter pelo menos 10 caracteres';
        }
        break;
    }
    
    return error;
  };
  
  // Função para lidar com mudanças nos campos
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Validar campo em tempo real
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };
  
  // Função para validar todo o formulário
  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error !== '');
  };
  
  // Função para enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os campos com erro",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simular envio para API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Sucesso!",
        description: "Sua solicitação foi enviada. Entraremos em contato em breve!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      // Limpar formulário
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua solicitação. Tente novamente.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "R$ 199",
      period: "/mês",
      description: "Perfeito para estacionamentos pequenos",
      features: [
        "Até 25 vagas",
        "Controle básico de entrada/saída",
        "Relatórios mensais",
        "Suporte por email",
        "App mobile básico",
      ],
      popular: false,
      icon: TrendingUp,
      color: "blue",
    },
    {
      name: "Professional",
      price: "R$ 399",
      period: "/mês",
      description: "Para estacionamentos em crescimento",
      features: [
        "Até 100 vagas",
        "Sistema de reservas completo",
        "Pagamentos online",
        "Relatórios em tempo real",
        "Notificações automáticas",
        "Suporte prioritário",
        "Múltiplos usuários",
      ],
      popular: true,
      icon: Zap,
      color: "green",
    },
    {
      name: "Enterprise",
      price: "R$ 799",
      period: "/mês",
      description: "Solução completa para grandes operações",
      features: [
        "Vagas ilimitadas",
        "Múltiplas filiais",
        "API personalizada",
        "Relatórios avançados",
        "Integração com sistemas existentes",
        "Suporte 24/7",
        "Treinamento da equipe",
        "Gestor dedicado",
      ],
      popular: false,
      icon: Crown,
      color: "purple",
    },
  ];

  return (
    <Box as="section" id="planos" py={20} bg="gray.50" position="relative">
      {/* Background decoration */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="300px"
        h="300px"
        bgGradient={`radial(circle, ${colors.primary}05, transparent)`}
        borderRadius="full"
        opacity={0.6}
      />
      
      <Container maxW="container.xl" px={4}>
        <VStack gap={16}>
          <VStack gap={6} textAlign="center" maxW="4xl" mx="auto">
            
            
            <Heading size="2xl" lineHeight="tight">
              <Text as="span" color="gray.900">
                Planos que se adaptam ao
              </Text>
              <br />
              <Text
                as="span"
                bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                bgClip="text"
              >
                seu negócio
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" lineHeight="relaxed">
              Escolha o plano ideal para o tamanho do seu estacionamento. Todos
              incluem 14 dias de teste grátis e suporte completo.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} maxW="6xl" w="full">
            {plans.map((plan, index) => (
              <Box
                key={index}
                position="relative"
                bg="white"
                borderRadius="2xl"
                p={8}
                boxShadow={plan.popular ? "2xl" : "lg"}
                _hover={{
                  boxShadow: "2xl",
                  transform: plan.popular ? "none" : "translateY(-8px)",
                }}
                transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                border="2px"
                borderColor={plan.popular ? colors.primary : "gray.100"}
                transform={plan.popular ? "scale(1.05)" : "none"}
                overflow="hidden"
              >
                {/* Badge de destaque para plano popular */}
                {plan.popular && (
                  <Badge
                    position="absolute"
                    top="-12px"
                    left="50%"
                    transform="translateX(-50%)"
                    bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                    color="white"
                    px={6}
                    py={3}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    boxShadow="xl"
                  >
                    <HStack gap={2}>
                      <Icon as={Star} h={4} w={4} />
                      <Text>Mais Popular</Text>
                    </HStack>
                  </Badge>
                )}

                {/* Ícone do plano */}
                <VStack gap={2} mb={6} textAlign="center">
                  <Box
                    w={16}
                    h={16}
                    bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="lg"
                  >
                    <Icon as={plan.icon} h={8} w={8} color="white" />
                  </Box>
                </VStack>

                <VStack gap={6} align="stretch">
                  <VStack gap={3} textAlign="center">
                    <Heading size="lg" color="gray.900">
                      {plan.name}
                    </Heading>
                    <Text color="gray.600" fontSize="md">
                      {plan.description}
                    </Text>
                    <HStack justify="center" align="baseline" gap={1}>
                      <Text fontSize="4xl" fontWeight="bold" color="gray.900">
                        {plan.price}
                      </Text>
                      <Text color="gray.600" fontSize="lg">
                        {plan.period}
                      </Text>
                    </HStack>
                  </VStack>

                  <List gap={3}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex}>
                        <HStack align="start" gap={3}>
                          <ListIcon
                            as={Check}
                            color={colors.primary}
                            h={5}
                            w={5}
                            mt={0.5}
                          />
                          <Text fontSize="sm" color="gray.700" lineHeight="relaxed">
                            {feature}
                          </Text>
                        </HStack>
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    bgGradient={
                      plan.popular
                        ? `linear(to-r, ${colors.primary}, ${colors.secondary})`
                        : undefined
                    }
                    variant={plan.popular ? "solid" : "outline"}
                    colorScheme={plan.popular ? undefined : undefined}
                    color={plan.popular ? "white" : colors.primary}
                    borderColor={plan.popular ? undefined : colors.primary}
                    borderWidth={plan.popular ? undefined : "2px"}
                    _hover={
                      plan.popular
                        ? {
                            bgGradient: `linear(to-r, ${colors.primary}dd, ${colors.secondary}dd)`,
                            transform: "translateY(-2px)",
                            boxShadow: "xl",
                          }
                        : { 
                            bg: `${colors.primary}10`,
                            transform: "translateY(-2px)",
                            boxShadow: "lg",
                          }
                    }
                    _active={{
                      transform: "translateY(0)",
                    }}
                    size="lg"
                    w="full"
                    py={6}
                    fontSize="md"
                    fontWeight="semibold"
                    transition="all 0.3s ease"
                  >
                    {plan.popular ? "Começar Agora" : "Teste Grátis"}
                  </Button>
                </VStack>

                {/* Linha decorativa */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                  opacity={plan.popular ? 1 : 0}
                  transition="opacity 0.3s ease"
                />
              </Box>
            ))}
          </SimpleGrid>

          <Box 
            bg="white" 
            p={{ base: 8, lg: 16 }} 
            borderRadius="3xl" 
            w="full" 
            boxShadow="2xl"
            position="relative"
            overflow="hidden"
          >
            {/* Elemento decorativo de fundo */}
            <Box
              position="absolute"
              top="-50%"
              right="-20%"
              w="400px"
              h="400px"
              bgGradient={`radial(circle, ${colors.primary}08, transparent)`}
              borderRadius="full"
              opacity={0.6}
            />
            
            <Box position="relative" zIndex={1}>
              <VStack gap={{ base: 8, lg: 12 }} align="stretch">
                {/* Cabeçalho centralizado */}
                <VStack gap={4} textAlign="center" mb={8}>
                  <Heading size="xl" color="gray.800">
                    Precisa de um plano personalizado?
                  </Heading>
                  <Text fontSize="lg" color="gray.600" maxW="3xl" lineHeight="relaxed">
                    Temos soluções sob medida para estacionamentos com necessidades específicas. 
                    Nossa equipe está pronta para criar o plano perfeito para você.
                  </Text>
                </VStack>

                {/* Layout de duas colunas */}
                <HStack 
                  gap={{ base: 8, lg: 16 }} 
                  align="start" 
                  justify="center"
                  direction={{ base: "column", lg: "row" }}
                >
                                     {/* Coluna do texto com benefícios */}
                   <VStack gap={8} flex={1} maxW="2xl" align={{ base: "center", lg: "start" }}>
                     <VStack gap={6} align={{ base: "center", lg: "start" }}>
                       <Box
                         position="relative"
                         w="full"
                         p={6}
                         bgGradient={`linear(135deg, ${colors.primary}08, ${colors.secondary}08)`}
                         borderRadius="2xl"
                         border="1px"
                         borderColor={`${colors.primary}20`}
                       >
                         <VStack gap={3} align={{ base: "center", lg: "start" }}>
                           <Heading size="lg" color="gray.800">
                             Soluções Personalizadas
                           </Heading>
                           <Text color="gray.600" fontSize="md" lineHeight="relaxed">
                             Desenvolvemos planos exclusivos que se adaptam perfeitamente às necessidades específicas do seu estacionamento
                           </Text>
                         </VStack>
                       </Box>
                     </VStack>
                     
                     <VStack gap={5} align={{ base: "center", lg: "start" }}>
                       <Text fontSize="lg" fontWeight="semibold" color="gray.800" mb={2}>
                         O que você recebe:
                       </Text>
                       
                       <VStack gap={4} align={{ base: "center", lg: "start" }}>
                         <HStack gap={4} align="start" p={4} bg="white" borderRadius="xl" w="full" boxShadow="sm">
                           <Box
                             w={3}
                             h={3}
                             bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                             borderRadius="full"
                             mt={2}
                             flexShrink={0}
                           />
                           <VStack gap={1} align="start">
                             <Text color="gray.800" fontSize="md" fontWeight="medium">
                               Análise Completa
                             </Text>
                             <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                               Avaliamos todas as necessidades do seu negócio
                             </Text>
                           </VStack>
                         </HStack>
                         
                         <HStack gap={4} align="start" p={4} bg="white" borderRadius="xl" w="full" boxShadow="sm">
                           <Box
                             w={3}
                             h={3}
                             bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                             borderRadius="full"
                             mt={2}
                             flexShrink={0}
                           />
                           <VStack gap={1} align="start">
                             <Text color="gray.800" fontSize="md" fontWeight="medium">
                               Proposta Customizada
                             </Text>
                             <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                               Solução sob medida para seu estacionamento
                             </Text>
                           </VStack>
                         </HStack>
                         
                         <HStack gap={4} align="start" p={4} bg="white" borderRadius="xl" w="full" boxShadow="sm">
                           <Box
                             w={3}
                             h={3}
                             bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                             borderRadius="full"
                             mt={2}
                             flexShrink={0}
                           />
                           <VStack gap={1} align="start">
                             <Text color="gray.800" fontSize="md" fontWeight="medium">
                               Suporte Dedicado
                             </Text>
                             <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                               Acompanhamento completo na implementação
                             </Text>
                           </VStack>
                         </HStack>
                       </VStack>
                     </VStack>
                   </VStack>

                                     {/* Coluna do formulário */}
                   <Box 
                     flex={1} 
                     maxW="md" 
                     bg="white" 
                     p={8} 
                     borderRadius="2xl"
                     border="2px"
                     borderColor="gray.100"
                     boxShadow="xl"
                     position="relative"
                     overflow="hidden"
                   >
                     {/* Elemento decorativo sutil */}
                     <Box
                       position="absolute"
                       top="-20px"
                       right="-20px"
                       w="100px"
                       h="100px"
                       bgGradient={`radial(circle, ${colors.primary}05, transparent)`}
                       borderRadius="full"
                       opacity={0.8}
                     />
                     
                     <Box position="relative" zIndex={1}>
                       <VStack gap={6} align="stretch">
                         <VStack gap={3} textAlign="center">
                           <Box
                             w={12}
                             h={12}
                             bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                             borderRadius="xl"
                             display="flex"
                             alignItems="center"
                             justifyContent="center"
                             mx="auto"
                           >
                             <Text fontSize="xl" fontWeight="bold" color="white">
                               ✉️
                             </Text>
                           </Box>
                           <Text fontSize="xl" fontWeight="bold" color="gray.800">
                             Solicite uma proposta
                           </Text>
                           <Text fontSize="md" color="gray.600" lineHeight="relaxed">
                             Preencha o formulário e nossa equipe entrará em contato em até 24 horas
                           </Text>
                         </VStack>
                         
                         {/*
                          <form onSubmit={handleSubmit}>
                            <VStack gap={5} align="stretch">
                              <FormControl isInvalid={!!errors.name}>
                                <FormLabel fontSize="sm" fontWeight="medium" color="gray.700">
                                  Nome completo 
                                </FormLabel>
                                <Input 
                                  type="text" 
                                  placeholder="Digite seu nome completo" 
                                  size="lg"
                                  bg="gray.50"
                                  border="2px"
                                  borderColor={errors.name ? "red.400" : "gray.200"}
                                  value={formData.name}
                                  onChange={(e) => handleInputChange('name', e.target.value)}
                                  _focus={{
                                    borderColor: errors.name ? "red.400" : colors.primary,
                                    bg: "white",
                                    boxShadow: errors.name ? "0 0 0 1px #F56565" : "0 0 0 1px " + colors.primary
                                  }}
                                  _placeholder={{
                                    color: "gray.400"
                                  }}
                                  _hover={{
                                    borderColor: errors.name ? "red.300" : "gray.300"
                                  }}
                                  transition="all 0.2s ease"
                                />
                                {errors.name && (
                                  <FormErrorMessage fontSize="sm" color="red.500">
                                    {errors.name}
                                  </FormErrorMessage>
                                )}
                              </FormControl>
                              
                              <FormControl isInvalid={!!errors.email}>
                                <FormLabel fontSize="sm" fontWeight="medium" color="gray.700">
                                  Email
                                </FormLabel>
                                <Input 
                                  type="email" 
                                  placeholder="seu@email.com" 
                                  size="lg"
                                  bg="gray.50"
                                  border="2px"
                                  borderColor={errors.email ? "red.400" : "gray.200"}
                                  value={formData.email}
                                  onChange={(e) => handleInputChange('email', e.target.value)}
                                  _focus={{
                                    borderColor: errors.email ? "red.400" : colors.primary,
                                    bg: "white",
                                    boxShadow: errors.email ? "0 0 0 1px #F56565" : "0 0 0 1px " + colors.primary
                                  }}
                                  _placeholder={{
                                    color: "gray.400"
                                  }}
                                  _hover={{
                                    borderColor: errors.email ? "red.300" : "gray.300"
                                  }}
                                  transition="all 0.2s ease"
                                />
                                {errors.email && (
                                  <FormErrorMessage fontSize="sm" color="red.500">
                                    {errors.email}
                                  </FormErrorMessage>
                                )}
                              </FormControl>
                              
                              <FormControl isInvalid={!!errors.message}>
                                <FormLabel fontSize="sm" fontWeight="medium" color="gray.700">
                                  Mensagem
                                </FormLabel>
                                <Input 
                                  type="text" 
                                  placeholder="Digite sua mensagem" 
                                  size="lg"
                                  bg="gray.50"
                                  border="2px"
                                  borderColor={errors.message ? "red.400" : "gray.200"}
                                  value={formData.message}
                                  onChange={(e) => handleInputChange('message', e.target.value)}
                                  _focus={{
                                    borderColor: errors.message ? "red.400" : colors.primary,
                                    bg: "white",
                                    boxShadow: errors.message ? "0 0 0 1px #F56565" : "0 0 0 1px " + colors.primary
                                  }}
                                  _placeholder={{
                                    color: "gray.400"
                                  }}
                                  _hover={{
                                    borderColor: errors.message ? "red.300" : "gray.300"
                                  }}
                                  transition="all 0.2s ease"
                                />
                                {errors.message && (
                                  <FormErrorMessage fontSize="sm" color="gray.500">
                                    {errors.message}
                                  </FormErrorMessage>
                                )}
                              </FormControl>
                              
                              <Button 
                                type="submit" 
                                size="lg"
                                bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondary})`}
                                color="white"
                                isLoading={isSubmitting}
                                loadingText="Enviando..."
                                _hover={{
                                  bgGradient: `linear(to-r, ${colors.primary}dd, ${colors.secondary}dd)`,
                                  transform: "translateY(-2px)",
                                  boxShadow: "xl"
                                }}
                                _active={{
                                  transform: "translateY(0)"
                                }}
                                transition="all 0.3s ease"
                                py={8}
                                fontSize="md"
                                fontWeight="bold"
                                borderRadius="xl"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Enviando..." : "Solicitar Proposta"}
                              </Button>
                              
                              
                            </VStack>
                          </form>
                          */}

                          <ContactForm />
                       </VStack>
                     </Box>
                   </Box>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Pricing;
