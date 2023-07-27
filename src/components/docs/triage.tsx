import React, {useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import {DocMetadata} from "@docusaurus/plugin-content-docs";
import {Center, ChakraProvider, Heading, Radio, RadioGroup, ScaleFade, Stack} from "@chakra-ui/react";
import {uniq} from 'lodash'
import startCase from "lodash/startCase";


export interface DataType {
    readonly id: string;
    readonly label: string;
    readonly definition: string;
    readonly examples: string;
}

export interface TriageProps {
    readonly docMetadata: DocMetadata[];
    readonly dataTypes: DataType[];
}

export interface TriageProps {
    readonly docMetadata: DocMetadata[];
    readonly dataTypes: DataType[];
}

export interface TriageState {
    theme?: string;
    dataTypeId?: string | 'skip'
}


export default function Triage({docMetadata, dataTypes}: TriageProps): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    const [state, setState] = useState<TriageState>({});

    const themes: string[] = uniq(docMetadata.map((meta) => meta.frontMatter['theme'] as string));

    return (

        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <ChakraProvider>
                <Center>

                    {!state.theme &&
                        <ScaleFade
                            initialScale={0.95}
                            in={true}

                        >
                            <Stack>
                                <Heading mt={2}>What is the theme you are interested in?</Heading>
                                <RadioGroup colorScheme={"green"}
                                            onChange={(value) => setState(() => ({theme: value}))}>
                                    <Stack>
                                        {themes.map((theme) =>
                                            <Radio value={theme}>
                                                {startCase(theme)}
                                            </Radio>
                                        )}
                                    </Stack>
                                </RadioGroup>
                            </Stack>
                        </ScaleFade>
                    }
                    {state.theme && !state.dataTypeId &&
                        <ScaleFade
                            key={state.theme}
                            initialScale={0.95}
                            in={true}

                        >
                            <Stack>
                                <Heading mt={2}>Which best describe the type(s) of data you have?</Heading>
                                <RadioGroup>
                                    <Stack>
                                        {dataTypes.map((dataType) =>
                                            <Radio value={dataType.id}>
                                                {startCase(dataType.label)}
                                            </Radio>
                                        )}
                                    </Stack>
                                </RadioGroup>
                            </Stack>
                        </ScaleFade>
                    }
                </Center>
            </ChakraProvider>
        </Layout>

    );
}
