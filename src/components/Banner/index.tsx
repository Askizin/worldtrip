import { Flex, Heading, Image, Text } from "@chakra-ui/react";


export default function Banner() {
    return (
        <Flex 
            w="100%"
            h={["163px","250px","250px","335px"]}
            bgImage="url('/images/banner-intro.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition={["100% 20%","100% 20%","100% 30%"]}
        
        >
            <Flex 
                justify={['center', 'space-between']}
                align="center"
                w="100%"
                mx="auto"
                px={["4","10","15","20","36"]}
            >
                <div>
                    <Heading color="gray.100" fontWeight="500" fontSize={["xl","2l","2xl","2xl","4xl"]}>
                        5 continentes,<br /> infinitas possibilidades.
                    </Heading>
                    <Text color="gray.300" mt="5" fontSize={["1rem","xl"]} maxW={["100%", "100%", "100%", "450px"]}>
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </div>

                <Image 
                    w={["300px","300px","300px", "430px"]}
                    display={['none','none', 'block']}
                    src="/images/Airplane.png"
                    alt="Avião amarelo voando com nuvens"
                    transform="translateY(48px)"
                    ml="8"
                />

            </Flex>
        </Flex>
    )
}