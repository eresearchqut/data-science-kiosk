import React from 'react';
import {DocProvider, useDoc} from '@docusaurus/theme-common/internal';
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

const Tags = ({frontMatter, prefix, colorScheme}: TagsPops) => {
    const tags: string[] = filter(frontMatter, (value, key) => key.startsWith(prefix)) as string[];
    return (
        <Stack direction='row'>
            <Badge variant={"ghost"} colorScheme={colorScheme}>{startCase(prefix)}</Badge>:
            {
                tags.map((tag: string) => <Badge variant={"outline"} colorScheme={colorScheme}>{tag}</Badge>)
            }
        </Stack>
    )
}


const DocItemContent = (props: Props) => {
    const {content: MDXPageContent} = props
    const {metadata, frontMatter, assets, contentTitle} = useDoc();

    return (
        <Stack>
            <Tags frontMatter={frontMatter} prefix={"data-expertise"} colorScheme={'green'}/>
            <Tags frontMatter={frontMatter} prefix={"data-method"} colorScheme={'orange'}/>
            <Tags frontMatter={frontMatter} prefix={"theme"} colorScheme={'messenger'}/>
            <Box m={1}>
                <MDXPageContent/>
            </Box>
        </Stack>
    );
}

export default function DocItem(props: Props): JSX.Element {
    const MDXComponent = props.content;
    return (
        <DocProvider content={props.content}>
            <ChakraProvider>
                <DocItemMetadata/>

                <DocItemLayout>

                    <DocItemContent {...props}/>
                </DocItemLayout>

            </ChakraProvider>
        </DocProvider>
    );
}


