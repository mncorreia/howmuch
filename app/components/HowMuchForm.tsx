import { VStack, Input, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form"
import { IFormInput } from "~/@types"
import { calculateToWithExchangeAndFees, formatPercent, inputToNumber } from "~/utils";
import { formatCurrency } from "~/utils/formatCurrency";

interface HowMuchFormProps {
    toExchangeRate: number;
    fromExchangeRate: number;
    fee: number;
}

export const HowMuchForm = ({
    toExchangeRate,
    fromExchangeRate,
    fee
}: HowMuchFormProps) => {
    const { register, setValue } = useForm<IFormInput>()


    const onChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fromInput = inputToNumber(e.target.value)
        setValue('to', calculateToWithExchangeAndFees(fromInput, toExchangeRate, fee));
    }

    const onChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const toInput = inputToNumber(e.target.value)
        setValue('from', calculateToWithExchangeAndFees(toInput, fromExchangeRate, fee));
    }

    return (
        <VStack spacing={4}>
            <Input placeholder='$ 199' size='lg' textAlign="right" {...register('from')} onChange={onChangeFrom} />
            <Text fontSize="lg" fontStyle="italic">
                Sairá por:
            </Text>
            <Input placeholder='R$ 1800' size='lg' textAlign="right" {...register('to')} onChange={onChangeTo} />
            <VStack align="flex-start">
                <Text fontWeight="bold" fontSize="sm" color="gray.600">1 USD = {toExchangeRate.toFixed(2)} BRL</Text>
                <Text fontSize="sm" color="gray.600">Imposto: {formatPercent(fee)}</Text>
            </VStack>
        </VStack>
    )
}