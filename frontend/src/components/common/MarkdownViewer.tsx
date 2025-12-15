'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// @uiw/react-md-editor의 Markdown 컴포넌트만 동적으로 로드합니다.
// SSR을 비활성화하여 하이드레이션 불일치 문제를 방지합니다.
const MDEditorMarkdown = dynamic(
    () => import('@uiw/react-md-editor').then((mod) => mod.default.Markdown),
    { ssr: false }
);

interface MarkdownViewerProps {
    source: string;
}

export default function MarkdownViewer({ source }: MarkdownViewerProps) {
    return (
        // data-color-mode 속성을 통해 라이브러리의 테마(light/dark)를 제어할 수 있습니다.
        // 현재는 시스템/부모 설정을 따르거나 light로 고정할 수 있습니다.
        // 필요하다면 e.g. document.documentElement.className 등을 감지하여 동적으로 변경할 수도 있습니다.
        <div data-color-mode="light">
            <MDEditorMarkdown
                source={source}
                style={{
                    backgroundColor: 'transparent',
                    color: 'inherit',
                    fontSize: 'inherit',
                    fontFamily: 'inherit'
                }}
            />
        </div>
    );
}
