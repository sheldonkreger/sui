// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { trimStdLibPrefix } from '../../../utils/stringUtils';
import { type DataType } from '../OwnedObjectConstants';

import { ObjectDetails } from '~/ui/ObjectDetails';

export default function OwnedNFTView({ results }: { results: DataType }) {
    return (
        <ul className="grid grid-cols-1 content-start justify-start gap-6 pl-0 sm:grid-cols-2 lg:grid-cols-2">
            {results.map((entryObj, idx) => (
                <ObjectDetails
                    id={entryObj.id}
                    key={`${entryObj.name}-${idx}`}
                    name={entryObj.name}
                    image={entryObj.display}
                    type={trimStdLibPrefix(entryObj.Type)}
                />
            ))}
        </ul>
    );
}
