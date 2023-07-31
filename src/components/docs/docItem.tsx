import React from 'react';
import {DocProvider, useDoc} from '@docusaurus/theme-common/internal';
import {Badge, BadgeProps, ChakraProvider, Stack} from "@chakra-ui/react";
import startCase from 'lodash/startCase'
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import type {Props} from '@theme/DocItem';
import {DocFrontMatter} from "@docusaurus/plugin-content-docs";

interface TagsPops extends Pick<BadgeProps, 'colorScheme'> {
    frontMatter: DocFrontMatter;
    attribute: string,
};

const Tags: React.FC<TagsPops> = ({frontMatter, attribute, colorScheme}) => {
    const tags = frontMatter[attribute]
    if (tags && tags.length > 0) {
        return (
            <Stack direction='row'>

                <Badge variant={"ghost"} colorScheme={colorScheme}>{startCase(attribute)}</Badge>:
                {
                    tags.map((tag: string) => <Badge variant={"outline"}
                                                     colorScheme={colorScheme}>{startCase(tag)}</Badge>)
                }
            </Stack>
        )
    }
    return null;
}


const DocTags: React.FC = () => {
    const {frontMatter} = useDoc();
    return (
        <ChakraProvider>
            <Stack>
                <Tags frontMatter={frontMatter} attribute={"dataExpertises"} colorScheme={'green'}/>
                <Tags frontMatter={frontMatter} attribute={"dataMethods"} colorScheme={'orange'}/>
                <Tags frontMatter={frontMatter} attribute={"themes"} colorScheme={'messenger'}/>
                <Tags frontMatter={frontMatter} attribute={"taskSolvers"} colorScheme={'pink'}/>
            </Stack>
        </ChakraProvider>
    );
}

export default function DocItem(props): JSX.Element {
    const {content: MDXPageContent} = props;
    return (
        <DocProvider content={props.content}>
            <DocItemMetadata/>
            <DocItemLayout>
                <>
                    <DocTags/>
                    <MDXPageContent/>
                </>
            </DocItemLayout>
        </DocProvider>
    );
}


