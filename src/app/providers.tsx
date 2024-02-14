'use client'

import { FluentProvider, RendererProvider, SSRProvider, createDOMRenderer, renderToStyleElements, teamsDarkTheme, teamsLightTheme } from '@fluentui/react-components'
import { useServerInsertedHTML } from 'next/navigation'
import * as React from 'react'

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    const [renderer] = React.useState(() => createDOMRenderer())

    useServerInsertedHTML(() => {
        return <>
            {
                renderToStyleElements(renderer)
            }
        </>
    })

    return (
        <RendererProvider renderer={renderer}>
            <SSRProvider>
                <FluentProvider theme={teamsLightTheme}>
                    {children}
                </FluentProvider>
            </SSRProvider>
        </RendererProvider>
    )
}