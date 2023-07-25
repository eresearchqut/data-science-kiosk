import React from 'react';
import {DocProvider, useDoc} from '@docusaurus/theme-common/internal';
import {ChakraProvider, Tag, TagLabel} from "@chakra-ui/react";

// export default function DocItem(props: Props): JSX.Element {
//     const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
//     const MDXComponent = props.content;
//     return (
//         <DocProvider content={props.content}>
//             <HtmlClassNameProvider className={docHtmlClassName}>
//                 <DocItemMetadata />
//                 <DocItemLayout>
//                     <MDXComponent />
//                 </DocItemLayout>
//             </HtmlClassNameProvider>
//         </DocProvider>
//     );
// }
//

export const Debug = (props) => {

    const {metadata, frontMatter, assets} = useDoc();
    return (
        <>
            <>
                {frontMatter['data-expertise']?.map((dataExpertise) => <Tag><TagLabel>{dataExpertise}</TagLabel></Tag>)}
            </>
            <pre>
            {/*<code>{JSON.stringify({props, frontMatter}, null, 2)}</code>*/}
        </pre>
        </>
    )

}

export default function Item(props) {

    return (
        <ChakraProvider>
            <DocProvider content={props.content}>
                <Debug {...props} />
            </DocProvider>
        </ChakraProvider>
    );
}