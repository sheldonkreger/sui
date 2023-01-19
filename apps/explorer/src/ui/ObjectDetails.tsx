// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import { useState } from 'react';
import Header from '~/components/header/Header';
import { Heading } from './Heading';

import { ObjectLink } from './InternalLink';
import { ObjectPreview } from './ObjectPreview';
import { Text } from './Text';

export interface ObjectDetailsProps {
    id: string;
    image?: string;
    name?: string;
    type: string;
}

interface ImageProps {
    onClick?: () => void;
    className: string;
    src: string;
    alt?: string;
}

function Image({ className, alt, src, ...rest }: ImageProps) {
    return (
        <img
            alt={alt}
            src={src}
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
                        <div className="flex flex-col gap-5">
                            <Image
                                alt={name}
                                src={image}
                                className="rounded-none"
                            />
                            <Heading
                                variant="heading2/semibold"
                                color="sui-light"
                            >
                                {name}
                            </Heading>
                            <Text color="gray-60" variant="body/medium">
                                {type}
                            </Text>
                        </div>
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
