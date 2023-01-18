// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type Meta, type StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { ObjectDetails, type ObjectDetailsProps } from '../ObjectDetails';

export default {
    component: ObjectDetails,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} as Meta;

export const Default: StoryObj<ObjectDetailsProps> = {
    render: () => (
        <ObjectDetails
            name="Rare Apepé 4042"
            type="JPEG Image"
            image="https://ipfs.io/ipfs/bafkreibngqhl3gaa7daob4i2vccziay2jjlp435cf66vhono7nrvww53ty"
        />
    ),
};
