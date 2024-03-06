import React from "react";
import { Box, Button, Flex, IconButton, Input, Stack, Text, VStack, Image, Link, useToast } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaInstagram, FaLink, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSignIn = (service) => {
    // Placeholder for authentication logic
    toast({
      title: `Sign in with ${service} clicked.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl">Welcome to Our Social Network!</Text>
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid">
            Create Profile
          </Button>
        </Flex>
      </Box>
      <Box p={5}>
        <Text fontSize="lg">Sign in with your existing account:</Text>
        <Stack direction="row" spacing={4} align="center" mt={4}>
          <IconButton aria-label="Sign in with Instagram" icon={<FaInstagram />} onClick={() => handleSignIn("Instagram")} />
          <IconButton aria-label="Sign in with X.com" icon={<FaLink />} onClick={() => handleSignIn("X.com")} />
          <IconButton aria-label="Sign in with Facebook" icon={<FaFacebook />} onClick={() => handleSignIn("Facebook")} />
          <IconButton aria-label="Sign in with Gmail" icon={<FaGoogle />} onClick={() => handleSignIn("Gmail")} />
        </Stack>
      </Box>
      <Box p={5}>
        <Text fontSize="lg">Share your media:</Text>
        <Input placeholder="Paste the link to your media here" mt={2} />
        <Button mt={2} colorScheme="blue" leftIcon={<FaLink />}>
          Share Now
        </Button>
      </Box>
      <Box p={5}>
        <Text fontSize="lg">Recent Posts:</Text>
        <VStack spacing={4} align="stretch" mt={2}>
          <Box p={3} shadow="md" borderWidth="1px">
            <Flex direction="column">
              <Image src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzA5NzU3OTUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Landscape" />
              <Text mt={2}>Beautiful landscape shared from Instagram</Text>
              <Link color="teal.500" href="#">
                <FaLink /> Support my work
              </Link>
            </Flex>
          </Box>
          {/* More posts... */}
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
