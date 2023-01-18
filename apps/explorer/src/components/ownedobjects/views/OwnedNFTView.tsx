// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { trimStdLibPrefix } from '../../../utils/stringUtils';
import { type DataType } from '../OwnedObjectConstants';

import { ObjectDetails } from '~/ui/ObjectDetails';

export default function OwnedNFTView({ results }: { results: DataType }) {
    return (
        <div data-testid="owned-objects">
            {results.map((entryObj, idx) => (
                <ObjectDetails
                    key={`${entryObj.name}-${idx}`}
                    name={entryObj.name}
                    image={entryObj.display}
                    type={trimStdLibPrefix(entryObj.Type)}
                />
            ))}
        </div>
    );
}
