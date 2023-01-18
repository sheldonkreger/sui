// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type ReactNode } from 'react';

import { LightBox } from './LightBox';

interface ObjectPreviewProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

export function ObjectPreview({ children, open, onClose }: ObjectPreviewProps) {
    return (
        <div className="relative">
            <LightBox open={open} onClose={onClose}>
                {children}
            </LightBox>
            {/* <IconButton
    className="absolute left-0 z-20 flex h-6 w-6 items-center rounded-full border-0 bg-gray-90 text-white"
    icon="x"
    aria-label="close modal"
/>; */}
        </div>
    );
}
