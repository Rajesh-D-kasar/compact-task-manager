# Midnight Network Demo: Zero-Knowledge Task and Milestone Tracker

## Overview
Our project introduces a zero-knowledge task and milestone tracker built on the Midnight Network, designed specifically for remote engineering teams and freelance collaboratives. Traditional task management tools expose sensitive project details, team velocities, and internal milestones on public ledgers or centralized databases. By leveraging Compact's public ledger state and private witnesses, our application allows contributors to prove that milestones have been achieved and deliverables have met criteria without disclosing the underlying code, financial stakes, or private metrics to external entities.

## State Management
To achieve this privacy, our smart contract strictly differentiates between Public State and Private Witness:
- **Public State:** Refers to variables stored on the ledger that are universally readable and verifiable by anyone interacting with the contract (e.g., `global_tasks_completed`, `task_status`, and `criteria_commitment`).
- **Private Witness:** Refers to secret inputs or local variables handled inside the ZK circuit (e.g., `private_criteria`) that are never exposed to the blockchain. The `disclose()` mechanism is used selectively in the constructor to reveal only what is strictly necessary to initialize the public state, while execution data remains fully private.

## Local Setup & Execution

### Prerequisites
- Node.js (>= 22.0.0)
- Docker
- Windows Subsystem for Linux (WSL) if on Windows (needed for the Compact compiler)

### 1. Install Dependencies
```bash
npm install
```

### 2. Compile the Smart Contract
Generate the zero-knowledge circuits and TypeScript bindings:
```bash
npm run compile
```
*(Note: On Windows, this routes through WSL to invoke the `compact` compiler.)*

### 3. Start the Midnight Devnet (Proof Server)
Launch the local blockchain and proof generation services via Docker:
```bash
npm run proof-server:start
```

### 4. Deploy and Test
To deploy the contract and run the automated end-to-end tests:
```bash
npm run test:e2e
```
Or use the CLI interactively:
```bash
npm run setup  # Deploys the contract
npm run cli    # Starts the interactive interface
```

### 5. Stop the Devnet
When you're finished testing:
```bash
npm run proof-server:stop
```

## Challenge Submission Checklist
- [x] **Smart Contract:** `task-tracker.compact` contains properly differentiated Public State and Private Witness.
- [x] **Managed Directory:** The generated `managed/` directory containing ZK circuits and keys is included in version control.
- [x] **Tests & CLI:** TypeScript interface (`cli.ts`, `deploy.ts`, `e2e-check.ts`) executes without compilation errors.
- [x] **Documentation:** Setup instructions, product idea, and state differences are documented in this README.
- [x] **Git History:** The repository has at least 5 meaningful commits.
- [ ] **Deployment Proof:** A screenshot/log of the contract deployed to Devnet/Preview/Preprod is included (Must be added manually upon successful port bind).
