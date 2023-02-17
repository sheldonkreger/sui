// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useRpc } from '~/hooks/useRpc';
import { PageHeader } from '~/ui/PageHeader';
import { Tab, TabGroup, TabPanels } from '~/ui/Tabs';

export default function Checkpoint() {
    // todo: use digest when api is available
    const { id: sequenceNumber } = useParams();
    const rpc = useRpc();

    const { data: checkpoint } = useQuery(
        ['checkpoint', sequenceNumber],
        async () => {
            // todo: replace this with sui_getCheckpoint when available
            const summary = await rpc.getCheckpointSummary(
                Number(sequenceNumber)
            );
            const contents = await rpc.getCheckpointContents(
                Number(sequenceNumber) as unknown as string //todo: arg types are wrong in rpc
            );

            return { ...contents, ...summary };
        }
    );

    return (
        <div className="space-y-12">
            {checkpoint && (
                <div>
                    <PageHeader
                        type="Checkpoint"
                        title={checkpoint?.content_digest}
                    />
                    <TabGroup size="lg">
                        <Tab>Details</Tab>
                        <TabPanels>
                            <div>test</div>
                        </TabPanels>
                    </TabGroup>
                </div>
            )}
        </div>
    );
}
