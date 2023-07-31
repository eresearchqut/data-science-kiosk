import React, {useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import {DocMetadata} from "@docusaurus/plugin-content-docs";
import {
    Button,
    ChakraProvider,
    Checkbox,
    CheckboxGroup,
    Flex,
    Heading,
    Radio,
    RadioGroup,
    ScaleFade,
    Stack,
    Text
} from "@chakra-ui/react";
import startCase from "lodash/startCase";
import {ChevronRightIcon, RepeatIcon} from "@chakra-ui/icons";


export interface ThemeType {
    readonly id: string;
    readonly label: string;
}

export interface QuestionType {
    readonly id: string;
    readonly label: string;
    readonly definition: string;
}

export interface DataType {
    readonly id: string;
    readonly label: string;
    readonly definition: string;
    readonly examples: string;
}

export interface KioskProps {
    readonly docMetadata: DocMetadata[];
    readonly themes: ThemeType[];
    readonly dataTypes: DataType[];
    readonly questionTypes: QuestionType[];

}

export interface KioskState {
    step: 'theme' | 'dataTypes' | 'questionTypes',
    theme?: string;
    dataTypes?: string[],
    questionTypes?: string[]
}


export default function Kiosk({docMetadata, themes, dataTypes, questionTypes, ...rest}: KioskProps): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    const [state, setState] = useState<KioskState>({step: "theme"});
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <div className="container">
                <ChakraProvider>
                    <Stack mb={4}>
                        {state.step === 'theme' &&
                            <ScaleFade
                                initialScale={0.95}
                                in={true}>
                                <Heading mt={2}>What is the theme you are interested in?</Heading>
                                <RadioGroup colorScheme={"green"}
                                            onChange={(value) => setState(() => ({theme: value, step: 'dataTypes'}))}>
                                    <Stack>
                                        {themes.map((theme) =>
                                            <Radio value={theme.id}>
                                                <Text size={"lg"} m={0} fontWeight={"extrabold"}>{theme.label}</Text>
                                            </Radio>
                                        )}
                                    </Stack>
                                </RadioGroup>
                            </ScaleFade>
                        }
                        {state.step === 'dataTypes' &&
                            <ScaleFade
                                key={'data-type-ids'}
                                initialScale={0.95}
                                in={true}
                            >
                                <Heading mt={2}>Which best describe the type(s) of data you have?</Heading>
                                <CheckboxGroup
                                    onChange={(value) => setState((current) => ({
                                        ...current,
                                        dataTypes: value as string[]
                                    }))}>
                                    <Stack>
                                        {dataTypes.map((dataType) =>
                                            <Checkbox value={dataType.id} size={"lg"}>
                                                <Stack spacing={0} ml={1}>
                                                    <Text
                                                        fontWeight={"extrabold"}
                                                        m={0}>{startCase(dataType.label)}</Text>
                                                    <Text fontSize={"small"}
                                                          m={0}>Definition: {dataType.definition}</Text>
                                                    <Text fontSize={"small"} m={0}>Examples: {dataType.examples}</Text>
                                                </Stack>
                                            </Checkbox>
                                        )}
                                    </Stack>
                                </CheckboxGroup>

                                <Flex alignItems='center' gap='2' mt={4}>
                                    <Button colorScheme='teal' leftIcon={<ChevronRightIcon/>}
                                            onClick={() => setState((current) => ({
                                                ...current,
                                                step: 'questionTypes'
                                            }))}>{state.dataTypes?.length > 0 ? 'Next' : 'Skip'}</Button>
                                    <Button colorScheme='teal' variant={'outline'} leftIcon={<RepeatIcon/>}
                                            onClick={() => setState(() => ({step: 'theme'}))}>Reset</Button>
                                </Flex>
                            </ScaleFade>

                        }
                        {state.step === 'questionTypes' &&
                            <ScaleFade
                                key={'question-type-ids'}
                                initialScale={0.95}
                                in={true}
                            >
                                <Heading mt={2}>What is the type of question that you are interested in?</Heading>
                                <CheckboxGroup
                                    onChange={(value) => setState((current) => ({
                                        ...current,
                                        questionTypes: value as string[]
                                    }))}>
                                    <Stack>
                                        {questionTypes.map((questionType) =>
                                            <Checkbox value={questionType.id} size={"lg"}>
                                                <Stack spacing={0} ml={1}>
                                                    <Text
                                                        fontWeight={"extrabold"}
                                                        m={0}>{startCase(questionType.label)}</Text>
                                                    <Text fontSize={"small"}
                                                          m={0}>Definition: {questionType.definition}</Text>
                                                </Stack>
                                            </Checkbox>
                                        )}
                                    </Stack>
                                </CheckboxGroup>
                                <Flex alignItems='center' gap='2' mt={4}>
                                    <Button colorScheme='teal' variant={'outline'} leftIcon={<RepeatIcon/>}
                                            onClick={() => setState(() => ({step: 'theme'}))}>Reset</Button>
                                </Flex>
                            </ScaleFade>
                        }

                    </Stack>
                </ChakraProvider>
            </div>
        </Layout>
    );
}
