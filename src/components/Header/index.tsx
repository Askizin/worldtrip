import { Flex, Grid,Image  } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex
            as="header"
            bg="white"
            w="100%"
            mx="auto"
            px="4"
            h={["12","24"]}
            align="center"
            justify="center"
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                objectFit="cover"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >
                {<Image
                  src="/images/logo.png"
                  w={["20","44"]}
                  alt="Avião voando sobre o nome da marca Worldtrip"
                  justifySelf="center"
                  gridColumn="2" />}
            </Grid>
        </Flex>
    )
}