// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import { useState } from 'react';

import { Heading } from './Heading';
import { ObjectLink } from './InternalLink';
import { ObjectPreview } from './ObjectPreview';
import { Text } from './Text';

export interface ObjectDetailsProps {
    id: string;
    image?: string;
    name?: string;
    type: string;
    nsfw?: boolean;
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

function NsfwImage(props: ImageProps) {
    return (
        <div>
            <div className="relative flex">
                <div className="bg-[rgba(24, 36, 53, 0.3)] pointer-events-none absolute z-20 flex h-[60px] w-[60px] items-center justify-center text-center backdrop-blur-sm">
                    <Text color="white" variant="subtitleSmall/medium">
                        Sensitive Content
                    </Text>
                </div>
                <div className="z-0">
                    <Image {...props} />
                </div>
            </div>
        </div>
    );
}

export function ObjectDetails({
    id,
    image,
    name,
    type,
    nsfw = false,
}: ObjectDetailsProps) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    const openPreview = () => setOpen(true);

    return (
        <div
            className="flex items-center gap-3.75"
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
                    <div className="relative">
                        {nsfw ? (
                            <NsfwImage
                                onClick={openPreview}
                                alt={name}
                                src={image}
                                className="h-[60px] w-[60px] object-cover"
                            />
                        ) : (
                            <Image
                                onClick={openPreview}
                                alt={name}
                                src={image}
                                className="h-[60px] w-[60px] object-cover"
                            />
                        )}
                    </div>
                </>
            )}
            <div className="flex flex-col gap-1.25">
                <Text variant="bodySmall/medium" color="gray-90">
                    {name}
                </Text>
                <ObjectLink objectId={id} />
                <Text variant="bodySmall/medium" color="steel-dark">
                    {type}
                </Text>
            </div>
        </div>
    );
}
