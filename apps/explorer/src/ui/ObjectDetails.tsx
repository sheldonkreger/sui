// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { ObjectLink } from './InternalLink';
import { LightBox } from './LightBox';

export interface ObjectDetailsProps {
    image?: string;
    name?: string;
    type: string;
}

export function ObjectDetails({ image, name, type }: ObjectDetailsProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="flex items-center gap-3.75 text-bodySmall font-medium"
            data-testid="object-details"
        >
            {image && (
                <>
                    <LightBox open={open} onClose={() => setOpen(false)}>
                        <img
                            onClick={() => setOpen(true)}
                            alt="test"
                            className="max-h-[80vh] max-w-[80vw] rounded-md"
                            data-testid="loadedImage"
                            src={image}
                        />
                    </LightBox>
                    <img
                        onClick={() => setOpen(true)}
                        alt="test"
                        className="h-[60px] w-[60px] cursor-pointer rounded-md object-cover"
                        data-testid="loadedImage"
                        src={image}
                    />
                </>
            )}
            <div className="flex flex-col gap-1.25">
                <span className="text-p2 text-gray-90">{name}</span>
                <ObjectLink objectId="0xe169bdf2ef33434ceccd141691c7c66ff3ed4489" />
                <span className="text-steel-dark">{type}</span>
            </div>
        </div>
    );
}
