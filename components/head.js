import React from 'react'
import NextHead from 'next/head'
import { siteMeta } from '../blog.config'

const defaultDescription = siteMeta.description
const Head = props => (
    <NextHead>
        <meta charSet='UTF-8' />
        <title>
            {props.title?`${props.title} - ${siteMeta.title}`:siteMeta.title}
        </title>
        <meta
            name='description'
            content={props.description || defaultDescription}
        />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
    </NextHead>
)
export default Head