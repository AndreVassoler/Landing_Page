import emailjs from '@emailjs/browser';
import { VStack, FormControl, FormLabel, FormErrorMessage, Input, Button, useToast, Text, Alert, AlertIcon, Box, Icon, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

// Estilos animações
const progressAnimation = `
  @keyframes progress {
    from { width: 100%; }
    to { width: 0%; }
  }
`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const toast = useToast();
  const [configError, setConfigError] = useState<string | null>(null);
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<FormData>();

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = progressAnimation;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceId || serviceId === 'service_id' || !templateId || templateId === 'template_id' || !userId || userId === 'user_id') {
      setConfigError('Configuração do EmailJS não encontrada. Verifique o arquivo .env');
    }
  }, []);

  const sendEmail = async (data: FormData) => {
    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      if (!serviceId || serviceId === 'service_id' || !templateId || templateId === 'template_id' || !userId || userId === 'user_id') {
        throw new Error('Configuração do EmailJS incompleta. Verifique o arquivo .env');
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'inovate.dev2025@gmail.com',
          to_name: 'Inovate Dev',
          date: new Date().toLocaleDateString('pt-BR'),
          time: new Date().toLocaleTimeString('pt-BR')
        },
        userId
      );

      console.log('Email enviado com sucesso:', response);
      
      // Notificação do formulário
      toast({
        position: "top-right",
        duration: 6000,
        isClosable: true,
        render: () => (
          <Box
            bg="white"
            p={4}
            borderRadius="xl"
            boxShadow="2xl"
            border="1px solid"
            borderColor="green.200"
            maxW="400px"
            position="relative"
            overflow="hidden"
          >
            {/* Animação da barra de notificação */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="3px"
              bgGradient="linear(to-r, green.400, green.500)"
              animation="progress 6s linear"
            />
            
            <Flex align="center" gap={3}>
              <Box
                p={2}
                borderRadius="full"
                bgGradient="linear(to-r, green.400, green.500)"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={CheckCircle} boxSize={5} />
              </Box>
              
              <Box flex="1">
                <Text fontWeight="bold" color="green.800" fontSize="lg">
                  Mensagem Enviada!
                </Text>
                <Text color="green.600" fontSize="sm">
                  Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!
                </Text>
              </Box>
            </Flex>
            

          </Box>
        ),
      });
      
      reset();
      
    } catch (error: any) {
      console.error('Erro ao enviar email:', error);
      
      let errorMessage = "Erro ao enviar email. Tente novamente.";
      
      if (error.text) {
        try {
          const errorData = JSON.parse(error.text);
          if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (e) {
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      // Notificação de erro
      toast({
        position: "top-right",
        duration: 8000,
        isClosable: true,
        render: () => (
          <Box
            bg="white"
            p={4}
            borderRadius="xl"
            boxShadow="2xl"
            border="1px solid"
            borderColor="red.200"
            maxW="400px"
            position="relative"
            overflow="hidden"
          >
            {/* Barra de progresso animada */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="3px"
              bgGradient="linear(to-r, red.400, red.500)"
              animation="progress 8s linear"
            />
            
            <Flex align="center" gap={3}>
              <Box
                p={2}
                borderRadius="full"
                bgGradient="linear(to-r, red.400, red.500)"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={AlertCircle} boxSize={5} />
              </Box>
              
              <Box flex="1">
                <Text fontWeight="bold" color="red.800" fontSize="lg">
                  Erro no Envio
                </Text>
                <Text color="red.600" fontSize="sm">
                  {errorMessage}
                </Text>
              </Box>
            </Flex>
            

          </Box>
        ),
      });
    }
  };

  if (configError) {
    return (
      <Alert status="warning" borderRadius="md">
        <AlertIcon />
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold">Configuração Necessária</Text>
          <Text fontSize="sm">{configError}</Text>
          <Text fontSize="xs" color="gray.600">
            Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
          </Text>
          <Text fontSize="xs" fontFamily="mono" bg="gray.100" p={2} borderRadius="md">
            REACT_APP_EMAILJS_SERVICE_ID=seu_service_id<br/>
            REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id<br/>
            REACT_APP_EMAILJS_USER_ID=seu_user_id
          </Text>
          <Text fontSize="xs" color="gray.600">
            Obtenha estes valores em: https://dashboard.emailjs.com/
          </Text>
        </VStack>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <VStack gap={5} align="stretch">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel fontSize="sm" fontWeight="medium" color="gray.700">
            Nome completo *
          </FormLabel>
          <Input 
            type="text" 
            placeholder="Digite seu nome completo" 
            size="lg"
            bg="gray.50"
            border="2px"
            borderColor={errors.name ? "red.400" : "gray.200"}
            {...register('name', { 
              required: 'Nome é obrigatório',
              minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' }
            })}
            _focus={{
              borderColor: errors.name ? "red.400" : "#43B7A0",
              bg: "white",
              boxShadow: errors.name ? "0 0 0 1px #F56565" : "0 0 0 1px #43B7A0"
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
              {errors.name.message}
            </FormErrorMessage>
          )}
        </FormControl>
        
        <FormControl isInvalid={!!errors.email}>
          <FormLabel fontSize="sm" fontWeight="medium" color="gray.700">
            Email *
          </FormLabel>
          <Input 
            type="email" 
            placeholder="seu@email.com" 
            size="lg"
            bg="gray.50"
            border="2px"
            borderColor={errors.email ? "red.400" : "gray.200"}
            {...register('email', { 
              required: 'Email é obrigatório',
              pattern: { 
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: 'Email inválido' 
              }
            })}
            _focus={{
              borderColor: errors.email ? "red.400" : "#43B7A0",
              bg: "white",
              boxShadow: errors.email ? "0 0 0 1px #F56565" : "0 0 0 1px #43B7A0"
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
              {errors.email.message}
            </FormErrorMessage>
          )}
        </FormControl>
        
        <FormControl isInvalid={!!errors.message}>
          <FormLabel fontSize="sm" fontWeight="medium" color="gray.700">
            Mensagem *
          </FormLabel>
          <Input 
            type="text" 
            placeholder="Digite sua mensagem" 
            size="lg"
            bg="gray.50"
            border="2px"
            borderColor={errors.message ? "red.400" : "gray.200"}
            {...register('message', { 
              required: 'Mensagem é obrigatória',
              minLength: { value: 10, message: 'Mensagem deve ter pelo menos 10 caracteres' }
            })}
            _focus={{
              borderColor: errors.message ? "red.400" : "#43B7A0",
              bg: "white",
              boxShadow: errors.message ? "0 0 0 1px #F56565" : "0 0 0 1px #43B7A0"
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
              {errors.message.message}
            </FormErrorMessage>
          )}
        </FormControl>
        
        <Button 
          type="submit" 
          size="lg"
          bgGradient="linear(to-r, #43B7A0, #45A2B0)"
          color="white"
          isLoading={isSubmitting}
          loadingText="Enviando..."
          _hover={{
            bgGradient: "linear(to-r, #43B7A0dd, #45A2B0dd)",
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
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
        
        <Text fontSize="xs" color="gray.500" textAlign="center">
          * Campos obrigatórios
        </Text>
      </VStack>
    </form>
  );
}

export default ContactForm;