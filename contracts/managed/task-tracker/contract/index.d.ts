import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum TaskStatus { Pending = 0, Completed = 1 }

export type Witnesses<PS> = {
}

export type ImpureCircuits<PS> = {
  complete_task(context: __compactRuntime.CircuitContext<PS>,
                private_criteria_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
}

export type ProvableCircuits<PS> = {
  complete_task(context: __compactRuntime.CircuitContext<PS>,
                private_criteria_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
}

export type PureCircuits = {
}

export type Circuits<PS> = {
  complete_task(context: __compactRuntime.CircuitContext<PS>,
                private_criteria_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
}

export type Ledger = {
  readonly manager: Uint8Array;
  readonly task_status: TaskStatus;
  readonly criteria_commitment: Uint8Array;
  readonly global_tasks_completed: bigint;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>,
               manager_pk_0: Uint8Array,
               commitment_0: Uint8Array): Promise<__compactRuntime.ConstructorResult<PS>>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
export declare const expectedVk: Record<string, string>;
