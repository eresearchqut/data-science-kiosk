import React from 'react';
import {DocProvider, useDoc, useColorMode} from '@docusaurus/theme-common/internal';
import {Badge, BadgeProps, Box, ChakraProvider, Stack} from "@chakra-ui/react";
import filter from 'lodash/filter'
import startCase from 'lodash/startCase'
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import type {Props} from '@theme/DocItem';
import {DocFrontMatter} from "@docusaurus/plugin-content-docs";

interface TagsPops extends Pick<BadgeProps, 'colorScheme'> {
    frontMatter: DocFrontMatter;
    prefix: string,
};

const Tags: React.FC<TagsPops> = ({frontMatter, prefix, colorScheme}) => {
    const tags: string[] = filter(frontMatter, (value, key) => key.startsWith(prefix)) as string[];
    if (tags && tags.length > 0) {
        return (
            <Stack direction='row'>
                <Badge variant={"ghost"} colorScheme={colorScheme}>{startCase(prefix)}</Badge>:
                {
                    tags.map((tag: string) => <Badge variant={"outline"} colorScheme={colorScheme}>{tag}</Badge>)
                }
            </Stack>
        )
    }
    return null;
}


const DocItemContent: React.FC<Props> = ({content: MDXPageContent}) => {
    const {frontMatter} = useDoc();
    const {colorMode} = useColorMode();
    return (
        <ChakraProvider>
            <Stack>
                <Tags frontMatter={frontMatter} prefix={"data-expertise"} colorScheme={'green'}/>
                <Tags frontMatter={frontMatter} prefix={"data-method"} colorScheme={'orange'}/>
                <Tags frontMatter={frontMatter} prefix={"theme"} colorScheme={'messenger'}/>
                <Tags frontMatter={frontMatter} prefix={"task-solver"} colorScheme={'pink'}/>
                <Box m={1}>
                    <MDXPageContent/>
                </Box>
            </Stack>
        </ChakraProvider>
    );
}

export default function DocItem(props: Props): JSX.Element {
    const MDXComponent = props.content;
    return (
        <DocProvider content={props.content}>
            <DocItemMetadata/>
            <DocItemLayout>
                <DocItemContent {...props}/>
            </DocItemLayout>
        </DocProvider>
    );
}


