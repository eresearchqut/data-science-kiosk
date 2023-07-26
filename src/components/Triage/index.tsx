import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import {LoadedContent} from "@docusaurus/plugin-content-docs";


function TriageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header>
            <div className="container">
                <h1 className="hero__title">Triage Demo</h1>
            </div>
        </header>
    );
}

function TriageSection() {
    const {siteConfig, globalData, siteMetadata} = useDocusaurusContext();
    return (
        <section>
            <div className="container">
                <pre>{JSON.stringify(siteMetadata, null, 2)}</pre>
            </div>
        </section>
    );
}

export interface TriageProps {
    content: LoadedContent
}

export default function Triage({content}: TriageProps): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <TriageHeader/>
            <main>
                <pre></pre>
            </main>
        </Layout>
    );
}
