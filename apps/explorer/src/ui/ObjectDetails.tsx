// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import { useState } from 'react';

import { ObjectLink } from './InternalLink';
import { ObjectPreview } from './ObjectPreview';

export interface ObjectDetailsProps {
    id: string;
    image?: string;
    name?: string;
    type: string;
}

interface ImageProps {
    onClick: () => void;
    className: string;
    src: string;
    alt?: string;
}

function Image({ onClick, className, alt, src, ...rest }: ImageProps) {
    return (
        <img
            alt={alt}
            src={src}
            onClick={onClick}
            className={clsx('rounded-md', 'cursor-pointer', className)}
            {...rest}
        />
    );
}

export function ObjectDetails({ id, image, name, type }: ObjectDetailsProps) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    const openPreview = () => setOpen(true);

    return (
        <div
            className="flex items-center gap-3.75 text-bodySmall font-medium"
            data-testid="object-details"
        >
            {image && (
                <>
                    <ObjectPreview open={open} onClose={close}>
                        <Image
                            onClick={close}
                            alt={name}
                            src={image}
                            className="max-h-[80vh] max-w-[80vw]"
                        />
                    </ObjectPreview>
                    <Image
                        onClick={openPreview}
                        alt={name}
                        src={image}
                        className="h-[60px] w-[60px] object-cover"
                    />
                </>
            )}
            <div className="flex flex-col gap-1.25">
                <span className="text-p2 text-gray-90">{name}</span>
                <ObjectLink objectId={id} />
                <span className="text-steel-dark">{type}</span>
            </div>
        </div>
    );
}
