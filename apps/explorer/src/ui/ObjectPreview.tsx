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
        </div>
    );
}
