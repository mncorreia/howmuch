import { HStack, Text } from "@chakra-ui/react"
import { PinIcon } from "./PinIcon"

export const Location = () => {
    return <HStack width="100%">
        <PinIcon boxSize={6} />
        <Text>Florida, EUA</Text>
    </HStack>
}