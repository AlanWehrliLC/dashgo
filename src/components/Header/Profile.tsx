import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Alan Wehrli</Text>
          <Text color="gray.300" fontSize="small">
            wehrlialan1@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Alan Wehrli" />
    </Flex>
  )
}
