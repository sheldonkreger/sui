// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { fromB64 } from '@mysten/bcs';
import nacl from 'tweetnacl';
import { describe, it, expect } from 'vitest';
import { Ed25519Keypair } from '../../../src';

const VALID_SECRET_KEY = 'mdqVWeFekT7pqy5T49+tV12jO0m+ESW7ki4zSU9JiCg=';

// Test case generated against rust keytool cli. See https://github.com/MystenLabs/sui/blob/edd2cd31e0b05d336b1b03b6e79a67d8dd00d06b/crates/sui/src/unit_tests/keytool_tests.rs#L165
const TEST_CASES = [
  [
    'film crazy soon outside stand loop subway crumble thrive popular green nuclear struggle pistol arm wife phrase warfare march wheat nephew ask sunny firm',
    'AN0JMHpDum3BhrVwnkylH0/HGRHBQ/fO/8+MYOawO8j6',
    '8867068daf9111ee013450eea1b1e10ffd62fc87',
  ],
  [
    'require decline left thought grid priority false tiny gasp angle royal system attack beef setup reward aunt skill wasp tray vital bounce inflict level',
    'AJrA997C1eVz6wYIp7bO8dpITSRBXpvg1m70/P3gusu2',
    '29bb131378438b6c7f50526e6a853a72ed97f10b',
  ],
  [
    'organ crash swim stick traffic remember army arctic mesh slice swear summer police vast chaos cradle squirrel hood useless evidence pet hub soap lake',
    'AAEMSIQeqyz09StSwuOW4MElQcZ+4jHW4/QcWlJEf5Yk',
    '6e5387db7249f6b0dc5b68eb095109157dc192a0',
  ],
];

const TEST_MNEMONIC =
  'result crisp session latin must fruit genuine question prevent start coconut brave speak student dismiss';

describe('ed25519-keypair', () => {
  it('new keypair', () => {
    const keypair = new Ed25519Keypair();
    expect(keypair.getPublicKey().toBytes().length).toBe(32);
    expect(2).toEqual(2);
  });

  it('create keypair from secret key', () => {
    const secretKey = fromB64(VALID_SECRET_KEY);
    const keypair = Ed25519Keypair.fromSecretKey(secretKey);
    expect(keypair.getPublicKey().toBase64()).toEqual(
      'Gy9JCW4+Xb0Pz6nAwM2S2as7IVRLNNXdSmXZi4eLmSI=',
    );
  });

  it('create keypair from secret key and mnemonics matches keytool', () => {
    for (const t of TEST_CASES) {
      // Keypair derived from mnemonic
      const keypair = Ed25519Keypair.deriveKeypair(t[0]);
      expect(keypair.getPublicKey().toSuiAddress()).toEqual(t[2]);

      // Keypair derived from 32-byte secret key
      const raw = fromB64(t[1]);
      if (raw[0] !== 0 || raw.length !== 33) {
        throw new Error('invalid key');
      }
      const imported = Ed25519Keypair.fromSecretKey(raw.slice(1));
      expect(imported.getPublicKey().toSuiAddress()).toEqual(t[2]);
    }
  });

  it('generate keypair from random seed', () => {
    const keypair = Ed25519Keypair.fromSecretKey(
      Uint8Array.from(Array(32).fill(8)),
    );
    expect(keypair.getPublicKey().toBase64()).toEqual(
      'E5j2LG0aRXxRumpLXz29L2n8qTIWIY3ImX5Ba9F9k8o=',
    );
  });

  it('signature of data is valid', () => {
    const keypair = new Ed25519Keypair();
    const signData = new TextEncoder().encode('hello world');
    const signature = keypair.signData(signData);
    const isValid = nacl.sign.detached.verify(
      signData,
      signature,
      keypair.getPublicKey().toBytes(),
    );
    expect(isValid).toBeTruthy();
  });

  it('incorrect coin type node for ed25519 derivation path', () => {
    expect(() => {
      Ed25519Keypair.deriveKeypair(`m/44'/0'/0'/0'/0'`, TEST_MNEMONIC);
    }).toThrow('Invalid derivation path');
  });

  it('incorrect purpose node for ed25519 derivation path', () => {
    expect(() => {
      Ed25519Keypair.deriveKeypair(`m/54'/784'/0'/0'/0'`, TEST_MNEMONIC);
    }).toThrow('Invalid derivation path');
  });

  it('invalid mnemonics to derive ed25519 keypair', () => {
    expect(() => {
      Ed25519Keypair.deriveKeypair('aaa');
    }).toThrow('Invalid mnemonic');
  });
});
