import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import Code from './src/components/Code'

const primaryDark = "#003d34"
const secondaryDark = "#00787a"
const primaryAccent = "#00b349"
const secondaryAccent = "#94ebd8"
const primaryHighlight = "#00b349"
const primaryWhite = "#ffffff"

const components = {
    h2: ({ children }) => (
        <h2 style={{ color: primaryAccent }}>{children}</h2>
    ),
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'lightgray' }} {...props} />
    ),
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={
                        props.className && props.className.replace('language-', '')
                    }
                    {...props}
                />
            );
        }

    },
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
);