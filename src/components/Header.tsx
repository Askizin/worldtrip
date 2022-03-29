import { Flex } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex 
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="50%"
            mt="4"

            align="center"
        >
            <img src="/images/OBJECTS.png" alt="worldtrip" />
        </Flex>
    )
}