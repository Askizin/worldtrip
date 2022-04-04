import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
    icon: string;
    text: string;
}

export default function TravelType({icon, text}: TravelTypeProps) {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true,
    })

    return (
        <Flex 
            direction={["row", "column"]}
            align="center"
            justify="center"
        >
            {
                isMobile ? <Image src={`/images/icons/${icon}.svg`} w="85px" h="85px"/> : 
                <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>
            }
            <Text 
                mt={["1", "5"]} fontWeight="600" color="gray.700" fontSize={["md","xl","2xl"]}     
            >{text}</Text>
        </Flex>
    )
}