# Core Contract Storage Keys Reference

This document lists every `DataKey` variant defined in `onchain/contracts/core_contract/src/storage.rs`, what data is stored under each key, and the TTL policy currently applied in code.

## TTL constants used by this contract

- `PERSISTENT_LIFETIME_THRESHOLD = 120_960` ledgers.
- `PERSISTENT_BUMP_AMOUNT = 518_400` ledgers.

For keys that call `extend_ttl`, the contract bumps the key toward `PERSISTENT_BUMP_AMOUNT` when remaining TTL falls below `PERSISTENT_LIFETIME_THRESHOLD`.

## DataKey variants

| `DataKey` variant | Stored value | Storage class | TTL policy |
|---|---|---|---|
| `Resolver(BytesN<32>)` | `ResolveData` (`wallet: Address`, `memo: Option<u64>`) keyed by resolver commitment. | Persistent | No explicit `extend_ttl` call for this key in current code. |
| `SmtRoot` | Current sparse Merkle root (`BytesN<32>`). | Instance | No explicit TTL extension call in current code. |
| `StellarAddress(BytesN<32>)` | Primary linked Stellar `Address` for a user hash. | Persistent | No explicit `extend_ttl` call for this key in current code. |
| `StellarAddresses(BytesN<32>)` | Full linked Stellar address list (`Vec<Address>`) for a user hash. | Persistent | No explicit `extend_ttl` call for this key in current code. |
| `PrivacyMode(BytesN<32>)` | Per-user `PrivacyMode` (defaults to `PrivacyMode::Normal` if missing). | Persistent | `extend_ttl` is called with `PERSISTENT_LIFETIME_THRESHOLD` and `PERSISTENT_BUMP_AMOUNT`. |
| `Owner` | Contract owner `Address`. | Instance | No explicit TTL extension call in current code. |
| `Admin` | Contract admin `Address`. | Instance | No explicit TTL extension call in current code. |
| `Operator` | Contract operator `Address`. | Instance | No explicit TTL extension call in current code. |
| `ShieldedAddress(BytesN<32>)` | Shielded address commitment (`BytesN<32>`) for a user hash. | Persistent | `extend_ttl` is called with `PERSISTENT_LIFETIME_THRESHOLD` and `PERSISTENT_BUMP_AMOUNT`. |
| `CreatedAt(BytesN<32>)` | Creation timestamp (`u64`) for a user hash. | Persistent | `extend_ttl` is called with `PERSISTENT_LIFETIME_THRESHOLD` and `PERSISTENT_BUMP_AMOUNT`. |
| `Delegate(BytesN<32>, Address)` | Delegate `PermissionSet` scoped to a user hash + delegate address. | Persistent | `extend_ttl` is called on set with `PERSISTENT_LIFETIME_THRESHOLD` and `PERSISTENT_BUMP_AMOUNT`; key is removed on revoke. |

## Notes

- Scope is intentionally limited to `DataKey` in `core_contract/src/storage.rs`.
- This document records explicit TTL behavior present in current code paths.
