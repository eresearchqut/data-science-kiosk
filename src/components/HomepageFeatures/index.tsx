import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {useColorMode} from '@docusaurus/theme-common';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Innovation',
        Svg: require('@site/static/img/innovation.svg').default,
        description: (
            <>
                The main innovation and focus of this project is the triaging and classification of common sports data
                science problems and links to relevant resources. The sports data science problems, software,
                guidelines, training and experts will be predominantly elicited from our team of 11 investigators
                covering statistics, computer science, information systems and sports.
            </>
        ),
    },
    {
        title: 'Deliverables and Scope',
        Svg: require('@site/static/img/scope.svg').default,
        description: (
            <>
                The project will deliver a prototype data science kiosk, a web-based self-help tool where the user can
                enter a query and the kiosk will triage it, aka classify and tag the query, and return links to
                resources including: experts in the area (in data science and sports), software and guidelines on how to
                tackle the problem, and relevant training materials.
            </>
        ),
    },
    {
        title: 'Objectives',
        Svg: require('@site/static/img/objectives.svg').default,
        description: (
            <>
                The overall objective of this project is to collaboratively develop a prototype data science kiosk where
                users can bring a problem to the ‘kiosk’, have their problem tagged and classified with respect to
                categories of sports data science, and be provided with suggested software, guidelines, training and
                experts to address the problem.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {

    const {colorMode, setColorMode} = useColorMode();

    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={colorMode === 'dark' ? styles.featureSvgDark : styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
