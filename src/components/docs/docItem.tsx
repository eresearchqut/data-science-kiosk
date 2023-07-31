import React from 'react';
import {DocProvider, useColorMode, useDoc} from '@docusaurus/theme-common/internal';
import {Badge, BadgeProps, Box, Stack} from "@chakra-ui/react";
import startCase from 'lodash/startCase'
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import type {Props} from '@theme/DocItem';
import {DocFrontMatter} from "@docusaurus/plugin-content-docs";

interface TagsPops extends Pick<BadgeProps, 'colorScheme'> {
    frontMatter: DocFrontMatter;
    key: string,
};

const Tags: React.FC<TagsPops> = ({frontMatter, key, colorScheme}) => {
    const tags = frontMatter[key]
    if (tags && tags.length > 0) {
        return (
            <Stack direction='row'>
                <Badge variant={"ghost"} colorScheme={colorScheme}>{startCase(key)}</Badge>:
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

        <Stack>
            <Tags frontMatter={frontMatter} key={"dataExpertises"} colorScheme={'green'}/>
            <Tags frontMatter={frontMatter} key={"dataMethods"} colorScheme={'orange'}/>
            <Tags frontMatter={frontMatter} key={"themes"} colorScheme={'messenger'}/>
            <Tags frontMatter={frontMatter} key={"taskSolvers"} colorScheme={'pink'}/>
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
            <DocItemMetadata/>
            <DocItemLayout>
                <DocItemContent {...props}/>
            </DocItemLayout>
        </DocProvider>
    );
}


