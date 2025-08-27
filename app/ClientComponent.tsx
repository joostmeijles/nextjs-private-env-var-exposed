'use client'

export type ClientComponentProps = {
    key?: string;
}

export function ClientComponent({key}: ClientComponentProps) {
    return <>{key}</>
}