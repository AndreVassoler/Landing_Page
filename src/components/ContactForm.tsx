import emailjs from '@emailjs/browser';
import { VStack, FormControl, FormLabel, FormErrorMessage, Input, Button, useToast, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const toast = useToast();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<FormData>();

  const sendEmail = async (data: FormData) => {
    try {
      // Configure estas variáveis de ambiente no seu arquivo .env
      // REACT_APP_EMAILJS_SERVICE_ID=seu_service_id
      // REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id  
      // REACT_APP_EMAILJS_USER_ID=seu_user_id
      
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_id',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_id',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'inovate.dev2025@gmail.com',
          to_name: 'Inovate Dev'
        },
        process.env.REACT_APP_EMAILJS_USER_ID || 'user_id'
      );
      
      toast({
        title: "Sucesso!",
        description: "Email enviado com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      reset(); // Limpa o formulário
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro",
        description: "Erro ao enviar email. Tente novamente.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

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