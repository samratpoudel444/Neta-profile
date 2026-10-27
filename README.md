 
Previewing Repository_Assessment_Combined_Valuation_All_23_Topics_v2 (2) 2.md
 
# Repository Assessment, Technical Complexity, LOC Sizing & Commercial Valuation


Derived from *Repository Valuation Methodology: Google-Calibrated, 23-Topic Framework*. The effective-LOC rules (§7), complexity and maturity rubrics (§8), valuation formula (§10), evidence flags, gates and offer band (§13), reachability limits (§14), evaluation procedure (§20) and the 23 topics (§9) below are taken from that document and must be applied as written.


Perform a complete, evidence-based assessment of this repository for potential submission to a vendor that purchases proprietary, executable, end-to-end coding repositories.


The assessment must be based on the ACTUAL repository.


Inspect:


- Complete source code
- Project structure
- Modules
- Dependencies
- Build configuration
- Runtime configuration
- Tests
- Documentation
- Git history
- Commits
- Changes
- Branches
- Pull requests, when available
- Code quality
- Architecture
- Algorithms
- Business logic
- Executability
- End-to-end completeness
- Third-party dependencies/assets
- Sensitive information exposure


Do not make assumptions when repository evidence is unavailable.


If something cannot be verified, explicitly report:


UNKNOWN / NOT AVAILABLE / NOT VERIFIED


Do not invent evidence, coverage percentages, PRs, development history, or runtime behavior.


============================================================
VENDOR REQUIREMENTS
============================================================


The repository is being evaluated against the following vendor requirements:


1. Repository-level pricing.
2. Maximum repository offer: $50,000 USD.
3. The vendor is specifically interested in large, mature, and complex executable applications.
4. The vendor wants proprietary executable coding repositories.
5. The vendor wants end-to-end projects.
6. The vendor wants well-written and readable code.
7. The vendor evaluates code complexity and completeness.
8. Repositories should include history, changes, and commits.
9. Pull requests should be included when available.
10. Test coverage should be included when available.
11. The repository must not contain third-party dependencies or images that the submitter does not own, according to the vendor's submission requirement.
12. Submitted assets must be vetted for PII and sensitive information before submission.


IMPORTANT:


The vendor's definition of END-TO-END is:


"Complete and executable codebases rather than loose scripts or incomplete code snippets."


Therefore, do NOT classify a repository as end-to-end merely because it contains many files or modules.
 
 
Repository Assessment, Technical Complexity, LOC Sizing & Commercial Valuation
Derived from Repository Valuation Methodology: Google-Calibrated, 23-Topic Framework. The effective-LOC rules (§7), complexity and maturity rubrics (§8), valuation formula (§10), evidence flags, gates and offer band (§13), reachability limits (§14), evaluation procedure (§20) and the 23 topics (§9) below are taken from that document and must be applied as written.

Perform a complete, evidence-based assessment of this repository for potential submission to a vendor that purchases proprietary, executable, end-to-end coding repositories.

The assessment must be based on the ACTUAL repository.

Inspect:

Complete source code
Project structure
Modules
Dependencies
Build configuration
Runtime configuration
Tests
Documentation
Git history
Commits
Changes
Branches
Pull requests, when available
Code quality
Architecture
Algorithms
Business logic
Executability
End-to-end completeness
Third-party dependencies/assets
Sensitive information exposure
Do not make assumptions when repository evidence is unavailable.

If something cannot be verified, explicitly report:

UNKNOWN / NOT AVAILABLE / NOT VERIFIED

Do not invent evidence, coverage percentages, PRs, development history, or runtime behavior.

============================================================ VENDOR REQUIREMENTS ============================================================

The repository is being evaluated against the following vendor requirements:

Repository-level pricing.
Maximum repository offer: $50,000 USD.
The vendor is specifically interested in large, mature, and complex executable applications.
The vendor wants proprietary executable coding repositories.
The vendor wants end-to-end projects.
The vendor wants well-written and readable code.
The vendor evaluates code complexity and completeness.
Repositories should include history, changes, and commits.
Pull requests should be included when available.
Test coverage should be included when available.
The repository must not contain third-party dependencies or images that the submitter does not own, according to the vendor's submission requirement.
Submitted assets must be vetted for PII and sensitive information before submission.
IMPORTANT:

The vendor's definition of END-TO-END is:

"Complete and executable codebases rather than loose scripts or incomplete code snippets."

Therefore, do NOT classify a repository as end-to-end merely because it contains many files or modules.

A repository must demonstrate a complete executable application/system flow.

============================================================ SECTION 1 — BASIC REPOSITORY PROFILE ============================================================

First inspect and report the factual characteristics of the repository.

Report:

Repository name
Primary language(s)
Framework(s)
Platform(s)
Application type
Number of source files
Number of test files
Source LOC
Test LOC
Total relevant LOC
Number of modules
Number of packages
Number of major components
Build system
Configuration files
Database
APIs
UI
Background processing
External integrations
Executable entry points
Do not use LOC as a measure of technical complexity. Use LOC to determine vendor size eligibility and as a separate, secondary input to the commercial valuation model in Section 17.

============================================================ SECTION 2 — REPOSITORY SIZE ELIGIBILITY ============================================================

Determine whether the repository meets the vendor's stated repository size requirements.

Vendor size range:

Minimum: 1,000 lines of code

Maximum: 500,000 lines of code

Calculate the relevant code size carefully, using the effective-LOC rules in Section 17.1: git-tracked files only; tests, generated code, vendored code, embedded data and duplicated copies excluded; authored UI markup at half weight. Eligibility is assessed on effective LOC (L).

Separate:

Production/source code
Test code
Generated code
Vendored code
Third-party code
Configuration
Documentation
Assets
Do not artificially inflate the repository size.

Report:

Production LOC: X

Test LOC: X

Third-party/vendor LOC: X

Generated LOC: X

Total relevant repository LOC: X

Effective LOC (L, Section 17.1): X

Vendor Size Eligibility (1,000 ≤ L ≤ 500,000):

PASS or FAIL

If the repository is above the maximum or below the minimum, explicitly state that.

============================================================ SECTION 3 — END-TO-END APPLICATION ASSESSMENT ============================================================

This is one of the MOST IMPORTANT sections.

The vendor defines end-to-end as:

"Complete and executable codebases rather than loose scripts or incomplete code snippets."

Determine whether this repository satisfies that definition.

Analyze the complete application flow.

Identify:

Entry point
Input
Validation
Application/business logic
Data processing
Persistence
External communication
Output
Error handling
Configuration
Testing
Build/run process
Describe the actual execution flow.

For example:

INPUT ↓ APPLICATION ENTRY ↓ VALIDATION ↓ BUSINESS LOGIC ↓ DATA PROCESSING ↓ DATABASE / STORAGE ↓ EXTERNAL SERVICES ↓ RESPONSE / OUTPUT ↓ USER / SYSTEM

Use the actual architecture of this repository instead of this generic example.


END-TO-END CLASSIFICATION


Classify the repository as exactly one of:

A. Complete End-to-End Application B. Mostly Complete Application C. Partially Complete Application D. Library / Framework E. Collection of Scripts F. Prototype / Proof of Concept G. Incomplete Codebase

Explain the classification using concrete evidence.


EXECUTABILITY


Determine:

Can the repository be built?

Can the repository be executed?

Can the main application flow be demonstrated?

Are required runtime components present?

Are required configurations present?

Are required dependencies available?

Are there missing services?

Are there missing credentials?

Are there missing assets?

Are there unimplemented components?

Identify the actual build and execution commands if available.

Do not claim successful execution unless it has actually been verified.

Provide:

Executable: YES / PARTIAL / NO

End-to-End: YES / PARTIAL / NO

If no build or run was attempted, mark the answer "YES*" meaning plumbing present, not verified, and say so explicitly.


PLATFORM ADAPTATION


Judge end-to-end completeness and executability against the project type, not against a generic full-stack expectation:

Project type
Adaptation
Offline-first mobile app
The absence of a backend is not a defect. End-to-end is judged against the stated design
Client-only web or mobile app
End-to-end is scored for client completeness; dependence on an external backend reduces executability, not complexity
Backend or microservices
The absence of a UI is not a defect. Apply duplicate rule D2 (Section 17.1) to copied service cores; container coverage feeds executability
Cross-platform (Flutter, React Native)
Exclude platform runner folders; count shared code once
Desktop application
Outside the calibration set: assess as-is and set valuation confidence to Low
Multi-module or multi-repository
Apply the duplicate rules within the repository and Section 17.9 across repositories
============================================================ SECTION 4 — APPLICATION MATURITY ============================================================

Determine whether the repository qualifies as a mature application.

Analyze:

Architecture
Feature completeness
Error handling
Validation
Testing
Security
Persistence
Configuration
Logging
Monitoring
Performance
Scalability
Refactoring
Documentation
Git evolution
Dependency management
Edge-case handling
Recovery mechanisms
Maintainability
Classify:

Prototype
Early-stage
Intermediate
Mature
Highly Mature / Enterprise-oriented
Provide:

Application Maturity Score: X/10

Explain the evidence.

============================================================ SECTION 5 — PROPRIETARY / ORIGINAL CODE ASSESSMENT ============================================================

Determine how much of the repository represents original implementation.

Analyze:

First-party source code
Third-party libraries
Open-source dependencies
Vendored source
Generated source
Templates
Boilerplate
Copied code
External assets
Images
Fonts
Icons
Sample data
Example code
Separate:

ORIGINAL IMPLEMENTATION

from

THIRD-PARTY / EXTERNAL MATERIAL

Do not claim legal ownership.

Instead report:

Original implementation: LOW / MODERATE / HIGH / VERY HIGH

Explain why.

============================================================ SECTION 6 — THIRD-PARTY DEPENDENCY & ASSET AUDIT ============================================================

This section is critical because the vendor specifically asks for confirmation regarding third-party dependencies or images that the submitter does not own.

Inspect:

Package managers
Dependency files
Lock files
Maven/Gradle dependencies
npm dependencies
Python dependencies
CocoaPods
Swift Package Manager
Go modules
Rust crates
Native dependencies
Git submodules
Vendored source
Images
Fonts
Icons
Logos
Audio
Video
Sample datasets
Other external assets
For every significant dependency or asset determine:

Name
Version
Purpose
Source
License if detectable
Whether it appears third-party
Whether it is source code or runtime dependency
Whether ownership can be established from repository evidence
IMPORTANT:

Do not state:

"There are no third-party dependencies"

unless this has actually been verified.

Instead state one of:

No third-party dependencies identified
Third-party dependencies identified
Third-party dependencies exist but appear permissible
Ownership/license status requires verification
Unable to fully determine
Provide:

Third-Party Dependency Risk: LOW / MEDIUM / HIGH / UNKNOWN

============================================================ SECTION 7 — PII & SENSITIVE INFORMATION AUDIT ============================================================

Perform a repository-level scan for potentially sensitive information.

Look for:

API keys
Access tokens
Passwords
Private keys
Certificates
Secrets
Database credentials
Authentication tokens
Personal email addresses
Phone numbers
Physical addresses
User IDs
Customer information
Medical information
Financial information
Internal URLs
Internal infrastructure information
Cloud credentials
Environment secrets
Configuration containing sensitive values
Also inspect:

Git history
Old commits
Deleted files
Configuration files
Environment files
Test fixtures
Sample data
Logs
Documentation
IMPORTANT:

A secret removed from the current source may still exist in Git history.

Minimum gate scan (current tree): private-key headers, keystores and signing files, credential literals, .env files, sample data dumps, and third-party data files. State explicitly whether Git history was scanned (e.g., with gitleaks or trufflehog); if it was not, report Historical Sensitive Information as UNKNOWN.

Report:

Current Sensitive Information Findings: NONE / FOUND / UNKNOWN

Historical Sensitive Information: NONE / FOUND / UNKNOWN

Potential PII: NONE / FOUND / UNKNOWN

Potential Security Secrets: NONE / FOUND / UNKNOWN

List findings with file paths and commit references where appropriate.

DO NOT reproduce actual secrets in the report.

Mask them.

============================================================ SECTION 8 — GIT HISTORY, CHANGES & COMMITS ============================================================

The vendor requires repositories to include history, changes, and commits.

Analyze:

First commit
Latest commit
Total commits
Development period
Commit frequency
Commit distribution
Commit sizes
Branches
Merge commits
Tags
Refactoring commits
Feature commits
Bug-fix commits
Test commits
Dependency updates
Architectural changes
Analyze commit messages:

Specificity
Consistency
Generic messages
Repeated messages
Feature-oriented messages
Bug-fix patterns
Refactoring patterns
Determine whether the history demonstrates meaningful software development.

Provide:

Git History Quality: X/10

Explain why.

============================================================ SECTION 9 — PULL REQUEST ANALYSIS ============================================================

If pull request information is available, inspect:

Number of PRs
PR titles
PR descriptions
PR size
Review comments
Reviewer activity
Requested changes
Review iterations
Merge history
Feature branches
Relationship between PRs and commits
Provide:

PR / Code Review Maturity: X/10

If PR information is not available, state:

"Pull request information was not available for this repository."

Do NOT invent PR information.

============================================================ SECTION 10 — TESTING & COVERAGE ============================================================

Inspect:

Unit tests
Integration tests
End-to-end tests
UI tests
Functional tests
Performance tests
Security tests
Test utilities
Fixtures
Mocks
Test data
Failure-path tests
Edge-case tests
Determine:

Test LOC Test/source ratio Coverage report availability Actual measured coverage, if available

IMPORTANT:

Never invent test coverage.

If coverage cannot be measured, say:

"Measured test coverage was not available."

Then provide:

Testing Maturity Score: X/10

============================================================ SECTION 11 — CODE QUALITY & READABILITY ============================================================

Analyze:

Naming
Structure
Formatting
Consistency
Function size
Class responsibility
Abstraction
Duplication
Error handling
Documentation
Comments
Maintainability
Technical debt
Code smells
Separation of concerns
Provide:

Code Quality Score: X/10

Readability Score: X/10

Maintainability Score: X/10

Support the scores with concrete examples.

============================================================ SECTION 12 — AI-GENERATED CODE LIKELIHOOD ============================================================

Assess whether the repository shows indicators of AI-generated or heavily AI-assisted development.

Do not conclude AI generation simply because:

Code is clean
Code is modern
Code is consistent
Tests are extensive
Architecture is systematic
Analyze multiple independent signals.


GIT SIGNALS


Analyze:

Commit timestamps
Commit frequency
Large commits
Sudden codebase expansion
Commit message patterns
Generic commit messages
Development chronology
Relationship between implementation complexity and commit history

SOURCE CODE SIGNALS


Analyze:

Repetitive patterns
Naming patterns
Comment style
Documentation style
Boilerplate
Error handling
Abstraction patterns
Over-engineering
Similar implementations
Test-generation patterns
Unusual uniformity
Inconsistency across generated sections

HUMAN DEVELOPMENT SIGNALS


Look for:

Organic refactoring
Specific bug fixes
Incremental changes
Domain-specific decisions
Manual debugging patterns
Evolving architecture
Developer-specific conventions
Gradual test development

AI SCORE


Provide:

AI Code Likelihood Score: X/10

Interpretation:

1–2 = Very little evidence 3–4 = Weak evidence 5–6 = Moderate / inconclusive 7–8 = Strong evidence 9–10 = Very strong evidence

Separate:

Strong Evidence Moderate Evidence Weak Evidence Evidence Against Inconclusive Evidence

Do not identify a specific AI coding tool unless there is direct evidence.

============================================================ SECTION 13 — DEEP TECHNICAL COMPLEXITY ANALYSIS ============================================================

Now analyze the actual technical complexity.

DO NOT use LOC as the primary complexity measure.


13.1 ARCHITECTURE


Analyze:

Architecture style
Layers
Modules
Dependency direction
Coupling
Cohesion
Extensibility
Abstraction
Architectural trade-offs
Identify actual patterns such as:

Clean Architecture
Hexagonal
Layered
Modular monolith
Microservices
Event-driven
Plugin architecture
MVVM
MVI
DDD
Other patterns
Only identify patterns supported by actual implementation.

Architecture Complexity: X/10


13.2 MODULE COMPLEXITY


For each major module:

Purpose
Responsibilities
Dependencies
Important classes
Important interfaces
Algorithms
Integrations
Business importance
Identify the most technically difficult modules.

Module Complexity: X/10


13.3 ALGORITHMIC COMPLEXITY


Identify actual technically difficult algorithms.

Analyze:

Data processing
Searching
Filtering
Scheduling
Synchronization
State management
Caching
Optimization
Serialization
Parsing
Encryption
Queue processing
Concurrency
Data consistency
For every major algorithm explain:

What it does
Why it is difficult
How it is implemented
Edge cases
Performance
Reimplementation difficulty
Do not classify ordinary CRUD as a complex algorithm.

Algorithm Complexity: X/10


13.4 BUSINESS LOGIC


Analyze:

Business rules
Rule interactions
State transitions
Validation
Workflows
Permissions
Domain-specific behavior
Cross-module dependencies
Error conditions
Data consistency
Business Logic Complexity: X/10


13.5 CONCURRENCY / ASYNC


Analyze:

Threads
Coroutines
Async operations
Background jobs
Queues
Locks
Synchronization
Race conditions
Transactions
Event processing
Concurrency Complexity: X/10


13.6 DATABASE / DATA


Analyze:

Schema
Relationships
Queries
Indexes
Transactions
Migrations
Caching
Consistency
Persistence
Data processing
Data Complexity: X/10


13.7 NETWORKING / INTEGRATIONS


Analyze:

APIs
External services
Authentication
Serialization
Retries
Timeouts
Error handling
Synchronization
Third-party integrations
Integration Complexity: X/10


13.8 SECURITY


Analyze actual implementations of:

Authentication
Authorization
Encryption
Token management
Secure storage
API security
Input validation
Rate limiting
Sessions
Audit logging
Security Complexity: X/10


13.9 SCALABILITY / PERFORMANCE


Analyze:

Time complexity
Memory usage
Database access
Caching
Concurrency
Resource management
Bottlenecks
Large datasets
Request volume
Horizontal scaling
Vertical scaling
Scalability Complexity: X/10


13.10 INFRASTRUCTURE / BUILD


Analyze:

Build system
Dependency management
CI/CD
Environment configuration
Code generation
Infrastructure
Logging
Monitoring
Release configuration
Infrastructure Complexity: X/10


13.11 TESTING COMPLEXITY


Evaluate how difficult the system is to test due to:

Number of components
Integration boundaries
External services
Async behavior
State management
Database interaction
Failure scenarios
Testing Complexity: X/10

============================================================ SECTION 14 — TECHNICAL COMPLEXITY SCORE ============================================================

Calculate a final Technical Complexity Score using the default weighting below. LOC, repository size, number of files, number of dependencies, and number of classes must NOT directly contribute to this score. Score each category against the anchors and the 9–10 evidence rule in Section 17.2.

Architecture: 15% Algorithms: 15% Business Logic: 15% Modules: 10% Concurrency/Async: 10% Database/Data: 10% Networking/Integrations: 10% Security: 5% Scalability/Performance: 5% Infrastructure/Build: 3% Testing Complexity: 2%

Total = 100%

Show the mathematical calculation for every category.

Example: Architecture: 8.5 × 15% = 1.275 Algorithms: 8.0 × 15% = 1.200 [Continue for all categories.]

Technical Complexity Score = Sum of weighted category scores, reported to two decimal places out of 10.

Interpretation: 1–2 = Very Simple 3–4 = Low 5–6 = Moderate 7 = High 8 = Very High 9 = Advanced / Enterprise 10 = Exceptional

Calculate this score before commercial valuation. Do not raise it merely because the repository is large. A large repository can have low complexity; a smaller repository can have high complexity.

============================================================ SECTION 15 — DEVELOPMENT EFFORT ============================================================

Estimate the effort required to reproduce the application from scratch.

Do not simply convert LOC to time.

Consider:

Architecture
Requirements discovery
Algorithms
Business logic
Integration
Database
Security
Testing
Debugging
Infrastructure
Documentation
Refactoring
Performance optimization
Estimate:

Junior developer: X person-months

Mid-level developer: X person-months

Senior developer: X person-months

Senior/architect-led team: X person-months

Then provide:

Estimated realistic team: X developers

Estimated calendar duration: X–X months

Estimated total engineering effort: X person-months

Cross-check the estimate against the productivity bands below (conventional, non-AI-assisted development, applied to effective LOC L from Section 17.1):

Technical Complexity (C)
Productivity band
C < 5
1,500–2,500 LOC per person-month
5 ≤ C < 7
1,000–1,800 LOC per person-month
C ≥ 7
700–1,200 LOC per person-month
Development effort is a sanity check only. It is never a price input: repository purchase prices are a small fraction of conventional reproduction cost, and AI-assisted development decouples effort from LOC and history.

============================================================ SECTION 16 — VENDOR QUALIFICATION SCORE ============================================================

Create a separate Vendor Qualification Score from 0–10. This measures how closely the repository matches the vendor's stated requirements; it is NOT the same as Technical Complexity or the commercial valuation score.

Evaluate:

Repository Size Eligibility
Application Maturity
Executability
End-to-End Completeness
Originality
Code Quality
Readability
Code Completeness
Git History
PR/Review Maturity
Testing Maturity
Reusability
Provide a transparent scoring method and explain each component. Default method: the mean of size eligibility (10 if PASS), end-to-end, executability, application maturity, originality (VERY HIGH 9 / HIGH 7.5 / MODERATE 5 / LOW 3), code quality, git history, and testing, using the sub-scores from Section 17.4. The Vendor Qualification Score informs the recommendation; it is not a price input. Do not count unknown evidence as a confirmed pass. Where a required component is unknown, flag the uncertainty and explain how it affects the overall qualification score.

Vendor Qualification Score: X/10

============================================================ SECTION 17 — COMMERCIAL VALUATION: EFFECTIVE LOC, ENGINEERING SCORE & EVIDENCE FLAGS ============================================================

Maximum vendor repository offer: $50,000 USD.

Use the following calibrated internal valuation model. It is dynamic and continuous: effective LOC (L) determines a smooth LOC Size Factor; technical complexity (C) and maturity/readiness (M) determine a nonlinear Engineering Quality Multiplier; two binary evidence flags apply fixed multipliers; the result is capped at $50,000. There are no fixed LOC tiers, LOC-based valuation ceilings, or stepwise multipliers.

Final Estimated Commercial Value:

V = min( $50,000 , $50,000 × LOCf(L) × EngMult(E) × A )

where:

L = effective LOC (Section 17.1)
LOCf(L) = min(1, 1.2 × L / (L + 100,000)) (Section 17.3)
C = Technical Complexity Score (Sections 14 and 17.2)
M = Maturity and Commercial Readiness Score (Section 17.4)
E = (C × 0.70) + (M × 0.30) and EngMult(E) = 1 − (1 − E / 10)² (Section 17.5)
A = 0.5726^NoRealTests × 0.6234^LegacyStack (Section 17.7)
All constants are fixed. Do not re-fit, tune, or change any parameter for an individual repository, and do not adjust L, scores, or flags to reach a desired value. Determine every input from repository evidence before computing the value.

The formula is a proposed internal estimation model, not a confirmed vendor formula or universal market-pricing standard. Do not describe it as the vendor's actual policy unless the vendor confirms it.

If the vendor supplies its own scoring rules, use the vendor's rules and clearly distinguish them from this proposed model. Do not confuse eligibility with value, LOC with technical complexity, repository size with maturity, or estimated value with a guaranteed purchase price.


17.1 — ELIGIBILITY GATE AND EFFECTIVE LOC (L)


Effective LOC (L) is handwritten, first-party, non-duplicated production implementation. It is the only size input to the valuation. Do not treat all physical lines of code as equally valuable.

Count only git-tracked files (git ls-files); git-ignored build output is then excluded automatically. Use a reproducible counter such as cloc with explicit per-category file lists, and record the tool version, options, and every manual inclusion or exclusion.

LINE CATEGORIES

Category
Counted in L?
Production logic in general-purpose languages
Yes, weight 1.0
Authored UI markup: layouts, menus, navigation graphs, storyboards/xibs, CSS/SCSS/LESS, HTML, report templates
Yes, weight 0.5
Test code
No. Report separately; credited through the Testing sub-score (17.4) and the NoRealTests flag (17.7)
Generated code: codegen outputs, generator-script outputs, generated models or clients, schema or graph exports
No
Third-party or vendored source copied into the tree
No
Build artifacts and binaries (.apk, .aab, .jar, .aar, .dill, snapshots, minified bundles)
No
Data embedded in source (country, timezone or string tables, mock data)
No
Duplicated copies (identical files, copied service cores, forked app variants)
Counted once
Translations and locale resources, images, fonts and other assets, lockfiles, JSON/YAML/CSV data, configuration, documentation
No
Build scripts, CI, ops and tooling scripts
No
MECHANICAL CLASSIFICATION RULES

Apply these in order to the repository-relative paths returned by git ls-files:

Copy
EXCLUDE_DIRS (^|/)(node_modules|\.dart_tool|build|Pods|Carthage|DerivedData|dist|\.next|out|
projectFilesBackup|\.idea|\.vscode|\.gradle|release|intermediates|libs|google_fonts|
schemas|graphify-out|generated|coverage|vendor|venv|\.venv|__pycache__|\.cxx|captures|
bin|obj|target|ephe|build-logic|buildSrc|\.github|fastlane|\.kiro|\.claude)(/|$)
^([^/]+/)?([Ss]cripts|[Tt]ools?|tooling|Docker|docker)/ (tooling at depth ≤ 1)
^[^/]+\.(py|sh|rb|js|mjs|cjs)$ (repository-root scripts)
<dir of each pubspec.yaml>(ios|android|macos|windows|linux|web)/ (Flutter runners)
EXCLUDE_GEN (\.freezed\.dart|\.g\.dart|\.gr\.dart|\.mocks\.dart|\.config\.dart|\.min\.js|\.min\.css|
package-lock\.json|yarn\.lock|pnpm-lock\.yaml|next-env\.d\.ts|Package\.swift|
\.gradle|\.gradle\.kts|\.config\.(js|cjs|mjs|ts))$
(^|/)migrations/[0-9]{4}_[^/]*\.py$ (framework-generated migrations)
TEST (^|/)(test|tests|androidTest|androidTests|testDebug|testRelease|__tests__|
integration_test|testFixtures)(/|$) | (^|/)[^/]*Tests(/|$) |
\.(test|spec)\.(ts|tsx|js|jsx|mjs)$ | _test\.dart$ | (^|/)test_[^/]*\.py$ |
(^|/)tests\.py$ | (^|/)conftest\.py$
LOGIC \.(java|kt|swift|m|mm|dart|ts|tsx|js|jsx|mjs|cjs|py|sql|c|cc|cpp|cxx|h|hpp|go|rs|cs|
rb|php|lua|proto|groovy)$
SQL_DATA (sample|seed|dump|fixture|demo)[^/]*\.sql$ | /(sample-data|sample_data|seed|seeds|fixtures)/
VENDORED (^|/)(third_party|ThirdParty|thirdparty|Vendor|vendored)(/|$), plus any directory or
package root confirmed as copied third-party source (see the foreign-package check)
MARKUP res/(layout|menu|navigation)[^/]*/[^/]*\.xml$ |
\.(storyboard|xib|css|scss|sass|less|html|htm|jrxml)$

SUPPLEMENTARY CHECKS (confirm each by reading the files):

Foreign packages: list JVM package roots (or the equivalent namespaces) by line count. Any root not owned by the repository is vendored source and is excluded.
Embedded data: flag files of 300 or more code lines in which at least 70% of non-blank lines contain a string literal. Confirm by reading before excluding.
Generator scripts: if the repository contains scripts that write source files, identify and exclude their outputs.
Recognizable generated models, e.g., POJOs with sequentially numbered fields and serialization annotations.
Test-pattern review: list the directories classified as tests. Production packages whose names merely contain "Test" (for example a medical-test feature) are not tests.
DUPLICATE RULES

D1, normalized content duplicates (all repositories): files of 10 or more code lines whose content is identical after removing whitespace and package/import lines count once.
D2, sibling copies (multi-module repositories):Microservices sharing a package root: a file with the same package-relative path in two or more sibling services counts once, at its largest copy.
Declared variant forks of one application (evidence: shared class sets, merged histories): a class name present in several forks counts once, at its largest copy. Fork-only classes count in full.
Where D1 and D2 overlap, use the larger reduction. Never subtract the same lines twice.
EFFECTIVE LOC FORMULA

L = Logic − EmbeddedData − Generated − Duplicates + 0.5 × Markup

Logic is the code lines of LOGIC files remaining after the exclusion, test, vendored and SQL_DATA rules. Markup is the code lines of non-vendored MARKUP files after duplicate removal.

Residual boilerplate inside authored files (DTOs, repetitive routes, CRUD screens, very large page components) stays in L. It is reflected through the complexity and code-quality scores, not removed by judgment.

Report these categories separately:

Raw tracked code (all languages, cloc --vcs=git)
Production logic LOC, by language
Vendored / third-party LOC (excluded)
Test LOC (excluded) and the test-to-production ratio
Embedded data LOC (excluded)
Generated LOC (excluded)
Duplicated LOC (excluded; rule D1 or D2)
Authored markup LOC (raw → × 0.5)
Configuration and documentation LOC (excluded)
Effective LOC (L)
Do not assume that using a dependency makes its source first-party code. Runtime dependencies may be reported separately even when they are not physically copied into the repository. Audit dependency and asset licences and ownership separately under Sections 5–6. Exclude code the submitter does not own or is not authorized to submit. If ownership or classification is uncertain, flag it and exclude the uncertain lines from L until verified. If categories cannot be reliably separated, report UNKNOWN / NOT VERIFIED; do not invent a count.

Vendor size eligibility:

PASS: 1,000 ≤ L ≤ 500,000.
FAIL: L is outside that range.
UNKNOWN / NOT VERIFIED: L cannot be reliably measured or the counting basis is unclear.
The vendor's exact LOC-counting methodology is UNKNOWN unless supplied. State that vendor confirmation may be needed if its counting method differs. Eligibility does not guarantee acceptance or a particular price.


17.2 — TECHNICAL COMPLEXITY SCORE (C)


Use the Technical Complexity Score calculated in Section 14 (the same eleven categories and weights). Calculate and justify it before commercial valuation. Score each Section 13 category from 1 to 10 against these anchors:

Category
Weight
Low (1–3)
Moderate (4–6)
High (7–8)
Exceptional (9–10)
Architecture
15%
Monolithic god classes
Conventional layered or MVVM
Clean or modular with enforced boundaries; microservices
Multi-package or multi-service with enforced policy and extensions
Algorithms
15%
CRUD only
Standard parsing and calculations
Correctness-critical math, protocol parsing, computer vision
Original or from-scratch primitives (e.g., a memory-hard KDF implemented from the RFC), scientific-grade computation
Business logic
15%
Forms and lists
Multi-entity workflows
Rule engines, approval chains
Deep regulated-domain rules (payroll, tax, statutory, clinical)
Modules
10%
One module
Several packages
Many cohesive modules
Large modular system with clean dependency direction
Concurrency / async
10%
None, or deprecated async helpers
Callbacks, basic async
Coroutines or Flow, reactive streams, schedulers, queues
Actors or strict concurrency, reactive gateways, guaranteed background work
Database / data
10%
Preferences or files only
Simple local database
Many entities, migrations, transactions
Encrypted stores, schema-per-tenant, multi-datasource ETL with reconciliation
Networking / integrations
10%
None
A few SDKs
Payments, OAuth, messaging
Many external systems, including hardware or binary protocols and scraping
Security
5%
None
App lock, basic authentication
OAuth2 server, token introspection, rate limiting
Hardware-backed key hierarchies, crypto-bound biometrics, memory-hard KDFs
Scalability / performance
5%
Not applicable
Basic caching
Rate limiting, database per service
Proven high-scale design
Infrastructure / build
3%
Default build
Flavours, Docker
CI, convention plugins, environment matrices
Enforced build policy plus full containerization
Testing complexity
2%
Isolated units
Some boundaries
Many integration boundaries
Distributed and asynchronous systems
Rule against inflation: a category score of 9–10 requires demonstrated difficulty cited to specific files, such as an original algorithm, a correctness-critical calculation, a from-scratch cryptographic primitive, a hardware or binary protocol, or genuine distributed coordination. Breadth alone earns at most 8 on Modules.

LOC, file count, dependency count, class count, and module count must not directly increase technical complexity. Complexity must reflect actual engineering difficulty: architecture, algorithms, business logic, concurrency, data, integrations, security, scalability, infrastructure, and testing.

C = Σ (category score × weight), reported to two decimal places.


17.3 — CONTINUOUS LOC SIZE FACTOR (LOCf)


Do not use fixed LOC tiers, valuation ceilings by LOC band, or stepwise multipliers. The LOC contribution is calculated continuously from effective LOC (L), so small differences in L produce gradual changes rather than sudden jumps at arbitrary thresholds.

Let:

L = effective LOC (Section 17.1).
L_MAX = 500,000, the upper end of the stated vendor size range.
K = 100,000, the half-saturation parameter of the curve.
LOC Size Factor:

LOCf(L) = min( 1 , [L / (L + K)] / [L_MAX / (L_MAX + K)] ) = min( 1 , 1.2 × L / (L + 100,000) )

The factor equals 1.0000 at L = 500,000, changes continuously below it, and stays at 1.0000 above it. Use L, never raw or total repository LOC. Do not round intermediate values; report the factor to four decimal places.

Reference values (factor only, not valuation bands):

L
7,000
10,000
50,000
100,000
150,000
200,000
300,000
500,000
LOCf
0.0785
0.1091
0.4000
0.6000
0.7200
0.8000
0.9000
1.0000
Returns diminish with size: doubling L from 150,000 to 300,000 raises the factor by 25%, not 100%; going from 300,000 to 500,000 adds 11%; beyond 500,000 adds nothing.

If L is unknown, the factor is UNKNOWN / NOT VERIFIED. If L is outside 1,000–500,000, report that the repository fails the stated size eligibility requirement; any calculated amount must be clearly labelled conditional and must not imply eligibility.


17.4 — MATURITY AND COMMERCIAL READINESS SCORE (M)


M is the weighted sum of eight sub-scores, each scored from 0 to 10 using the evidence in the named section:

Sub-score
Weight
Source
Rubric
End-to-end completeness
20%
Section 3
9–10 complete system with all flows wired (classification A) · 7–8 complete apart from external services (B) · 5–6 key flows stubbed or bypassed (C) · ≤ 4 fragments, scripts, or prototypes (D–G)
Executability
15%
Section 3 (Executability)
8 full build plumbing, reproducible · 6–7 runnable only with external pieces or pre-GA toolchains · 4–5 misconfiguration (e.g., debug mode enabled in production settings, missing signing setup) · ≤ 3 cannot run. If nothing was built, score the plumbing and state "not executed"
Application maturity
15%
Section 4
Residual production readiness only: error handling, validation, migrations, configuration, logging and monitoring, recovery. 9 robust · 6–7 good with gaps · 4–5 significant defects (e.g., at-rest encryption disabled, schema managed without migrations) · ≤ 3 critical defects (e.g., paid entitlement granted without charging). Do not reuse the overall Section 4 score here, because testing, quality and history have their own sub-scores
Testing
15%
Section 10
9–10 substantive unit plus integration or instrumented tests, test-to-production ratio ≥ 10% · 7–8 substantive tests, 5–10% · 5–6 real tests on critical helpers, 2–5% · 3–4 a few real tests, < 2% · 1–2 no tests or IDE-template stubs only
Code quality
15%
Section 11
Mean of Code Quality, Readability and Maintainability. 9 exemplary · 7 good · 5 mixed · ≤ 4 legacy god classes, forked copies, dead code
Git history
10%
Section 8
9–10: ≥ 500 commits, ≥ 250 active (distinct) commit days and ≥ 3 authors · 7–8: ≥ 200 commits and ≥ 80 active days · 5–6: ≥ 100 commits or ≥ 40 active days · 3–4: ≥ 20 commits and ≥ 10 active days · 1–2: below that
PR / review
5%
Section 9
Score only when PR evidence exists: 5 if PRs were merged but review content is not visible, up to 10 with visible review iterations. Plain merge commits are not PR evidence
Documentation
5%
Sections 4 and 11
8 thorough setup, run and architecture documentation · 6 adequate · 3 minimal · 1 none
M = Σ (sub-score × weight). When pull-request evidence is unavailable, drop its 5% weight and divide the weighted sum by 0.95. Never score a missing data source as zero, and never count unknown evidence as a pass.

Maturity class (from M): < 3 Prototype · 3–4.5 Early-stage · 4.5–6 Intermediate · 6–7.5 Mature · ≥ 7.5 Highly mature / enterprise-oriented.

Explain every sub-score with evidence. Do not invent test coverage, ownership, runtime success, PR history, or other evidence. Each item of evidence is scored once, in one sub-score.

If evidence is insufficient for a sub-score, mark it UNKNOWN / NOT VERIFIED and state how that affects M. Do not silently substitute a score. A conditional example may be provided only when assumptions are explicitly labelled.


17.5 — ENGINEERING SCORE AND QUALITY MULTIPLIER


Calculate C (Section 17.2) and M (Section 17.4) before the commercial valuation. LOC, file count, dependency count, class count, and module count must not directly increase either score.

Engineering Score: E = (C × 0.70) + (M × 0.30)

Engineering Quality Multiplier: EngMult(E) = 1 − (1 − E / 10)²

Both input scores are between 0 and 10, so E is between 0 and 10 and EngMult is between 0 and 1. Technical complexity has the larger influence; maturity/readiness adjusts for evidence of completeness and commercial usability.

Reference values: E = 2 → 0.36 · E = 4 → 0.64 · E = 6 → 0.84 · E = 8 → 0.96 · E = 10 → 1.00. Raising E from 6 to 10 increases value by at most 19%. Complexity cannot multiply value arbitrarily and cannot rescue a small L.

If either input is UNKNOWN / NOT VERIFIED, the Engineering Score and final valuation are UNKNOWN / NOT VERIFIED. A conditional scenario may be shown only when its assumed inputs are stated clearly.


17.6 — BASE COMMERCIAL VALUE


Use a continuous formula. Do not create a LOC-tier table, assign a fixed ceiling to a LOC band, or apply a stepwise LOC multiplier.

Base Value = $50,000 × LOCf(L) × EngMult(E)

Equivalently: Base Value = $50,000 × min(1, 1.2 × L / (L + 100,000)) × (1 − (1 − ((C × 0.70) + (M × 0.30)) / 10)²)

Every factor is at most 1, so Base Value / $50,000 ≤ min(LOCf, EngMult). A high engineering score cannot rescue a small codebase, and a large codebase cannot rescue weak engineering. Neither LOC nor complexity alone determines value.

Model behaviour without flags, for checking calculations only (conditional model outputs, not offers):

L
E = 4 (×0.64)
E = 6 (×0.84)
E = 8 (×0.96)
E = 9 (×0.99)
E = 10 (×1.00)
10,000
$3,491
$4,582
$5,236
$5,400
$5,455
50,000
$12,800
$16,800
$19,200
$19,800
$20,000
150,000
$23,040
$30,240
$34,560
$35,640
$36,000
300,000
$28,800
$37,800
$43,200
$44,550
$45,000
500,000
$32,000
$42,000
$48,000
$49,500
$50,000
Calibration anchors (C = M = 8, no flags): 7,000 → $3,768 · 150,000 → $34,560 · 300,000 → $43,200 · 500,000 → $48,000.

Examples:

Small but complex: 7,000 effective LOC at C = 9, M = 8 gives $3,859. A small codebase stays small.
Large but simple: 300,000 effective LOC at C = 3, M = 4 gives $24,800. The multiplier holds it down.
If L is unknown, or either required score is unknown, do not invent a final value. Report the missing input and provide a conditional calculation only when assumptions are explicitly labelled. If the repository is outside the stated LOC eligibility range, label any amount conditional and separately report FAIL for eligibility.


17.7 — EVIDENCE FLAGS (FIXED CALIBRATED MULTIPLIERS)


Two binary evidence flags are the only price adjustments. Assign each one by its definition, cite the evidence, and never apply a flag partially.

NoRealTests = 1 (multiplier × 0.5726) when the repository has no automated tests, or only IDE- or template-generated stubs (e.g., an untouched ExampleUnitTest); that is, a Testing sub-score of 2 or less. Any real test suite with meaningful assertions, even a small one, clears the flag. Placeholder tests written only to clear the flag do not count.

LegacyStack = 1 (multiplier × 0.6234) when at least 2 of these 4 criteria hold:

The primary UI or framework idioms are deprecated by the platform vendor (e.g., ButterKnife, AsyncTask, the Android Support Library, Fabric SDK, or the equivalent on other platforms).
The target platform API level is 3 or more years behind current at the assessment date.
The majority of screens have no lifecycle-aware state architecture (MVVM, MVI, Redux, Bloc, or equivalent).
Most production code is in a language the platform has superseded (Java on Android, Objective-C on iOS). Server-side Java, C#, Python and similar languages are not superseded.
Flag multiplier:

A = 0.5726^NoRealTests × 0.6234^LegacyStack

No flags → 1.0000 · NoRealTests only → 0.5726 · LegacyStack only → 0.6234 · both → 0.3570

These multipliers measure the additional value effect beyond the Testing and Code Quality sub-scores already inside M. They were calibrated net of those sub-scores, so applying both the sub-score and the flag is not double counting.

Do NOT apply any other percentage adjustment, premium, or discount. Other factors are handled once, elsewhere:

Factor
Where it is handled
Duplicated, vendored or generated code; embedded data
Excluded from L (17.1)
Disabled security in a sensitive domain, stubbed flows, missing migrations
M: application maturity and end-to-end sub-scores (17.4)
Thin or burst history
M: git history sub-score (17.4)
Secrets, PII, licence or ownership doubts, bundles of unrelated products
Gates (17.8): they change the recommendation, not the value
AI-generated code likelihood (Section 12)
Value-neutral
High LOC
LOCf only; never a premium
Out-of-calibration overlay: use only for a material, verified issue outside the model's scope, such as verified copyleft contamination of first-party code or code that provably cannot be built. The default is 1.0. Label it UNCALIBRATED, cite the evidence, report it separately from the model value, and never use it to increase value.


17.8 — GATES, FINAL VALUE AND VENDOR CAP


Gates do not change the value. They are remediation preconditions that determine the recommendation (Section 23). The estimated value assumes every open gate is remediated before submission.

G1 Secrets / PII: private keys, signing keystores, live credentials, tokens, or personal data in the tree or in history (Section 7). Remove, rotate, and purge history.
G2 Licence / ownership: vendored source, binaries, data files, or assets whose licence or ownership is unverified or restrictive (Sections 5–6). Verify or remove.
G3 Critical safety defect: e.g., paid entitlement granted without charging, health or financial data stored unencrypted at rest, an authentication bypass. Fix before submission.
G4 Bundle: unrelated products in one repository. Split them, or follow Section 17.9.
Final Estimated Commercial Value:

V = min( $50,000 , max( $0 , Base Value × A ) )

The maximum offer must never exceed $50,000 USD. If Base Value × A exceeds the cap, show both the uncapped and the capped value.

Reachability: without flags, the maximum value at E = 10 is $36,000 at L = 150,000, $40,000 at L = 200,000, $45,000 at L = 300,000, and $50,000 only at L ≥ 500,000. Marginal value diminishes with size: at E = 8 it is about $0.58 per effective line at L = 0, $0.14 at L = 100,000, $0.04 at L = 300,000, $0.02 just below 500,000, and $0 beyond.

This is an analytical estimate, not a guarantee, formal appraisal, or promise of vendor acceptance.


17.9 — MULTI-REPOSITORY PRODUCTS AND BUNDLES


Never sum the values of related repositories automatically.

Situation
Rule
Individual repository valuation
Value each repository alone with this model and its own $50,000 cap
Combined product valuation
V_product = V_largest + Σ (1 − d_i) × V_i over the other repositories. Each V_i stays individually capped
Complementary repositories with distinct functions (backend vs clients, ETL tool vs application)
d = 0
Additional platform implementation of the same product (shared requirements, UX, design, test vectors)
d = 0.25, a proposed, uncalibrated allowance for shared design effort
Shared libraries
Count the library once, in its own repository or in its first consumer. Remove copies from every other repository's L (D1/D2 applied across repositories)
Duplicated implementations across repositories
Remove from L before valuation
Unrelated products in one repository
Price the repository using its whole-repository L. Report per-product values separately to support a split (gate G4)

17.10 — UNCERTAINTY AND CONFIDENCE


Typical estimation error is about ±20%: mean absolute percentage error was about 16% in calibration and about 22% in leave-one-out validation. State this with every value.
Calibration basis: 11 repositories with observed valuations; each evidence flag rests on 3 flagged repositories, so treat the flag multipliers as approximate. Sensitivity checks showed the markup weight and test credit barely change results, both flags are needed, and a smaller K would fit slightly better but breaks the anchors.
Known bias: the model has no premium for enterprise systems of record. It tends to under-estimate very large, highly mature enterprise backends and platforms, typically by 10–30%. It reaches $50,000 only at L ≥ 500,000 with E = 10.
Confidence rating:High: L measured with no unresolved classification, E ≥ 6, no build gaps, and a conventional web, mobile or backend profile.
Medium: some classification judgment, E < 6, or one flag applied.
Low: a bundle of unrelated products, an ambiguous size measure, or a profile outside the model's experience (desktop software, game engines, L > 350,000).
List everything not verified: builds, runtime behaviour, measured coverage, git-history secret scan, licences.

17.11 — REQUIRED VALUATION OUTPUT


Report:

Raw tracked code, production logic by language, and every excluded category (17.1)
Effective LOC (L) and the counting method
Vendor size eligibility: PASS / FAIL / UNKNOWN
Technical Complexity Score (C), with all eleven category scores and evidence
Maturity and Commercial Readiness Score (M), with all eight sub-scores and evidence
LOC Size Factor (LOCf)
Engineering Score (E) and each contribution (C × 0.70, M × 0.30)
Engineering Quality Multiplier (EngMult)
Base Value
NoRealTests and LegacyStack flags with evidence, and the flag multiplier A
Value before cap, and Final Estimated Commercial Value after cap
Open gates (G1–G4) and the required remediation
Conservative Offer, Recommended Offer, and Maximum Justifiable Offer (Section 18)
Confidence rating and typical error
All offers must be no greater than $50,000. Do not automatically set the maximum justifiable offer to $50,000. Base offers on repository evidence, state uncertainty, and distinguish facts from assumptions.

============================================================ SECTION 18 — OFFER PRICE ============================================================

Provide three values, all derived from the Final Estimated Commercial Value (V) in Section 17.8:

Conservative Offer = 0.80 × V
Recommended Offer = V
Maximum Justifiable Offer = min($50,000, 1.30 × V)
All values must be <= $50,000.

The band reflects the model's empirical error distribution: about 80% of calibration outcomes fell between 0.80× and 1.30× the model value. It is asymmetric because the model under-estimates high-quality, mature systems more often than it over-estimates.


CONSERVATIVE OFFER


0.80 × V. A price that gives the vendor a strong negotiation position.


RECOMMENDED OFFER


V. The price that best represents the repository's demonstrated technical and commercial value.


MAXIMUM JUSTIFIABLE OFFER


min($50,000, 1.30 × V). The highest amount that can reasonably be defended from repository evidence.

Do not automatically set this to $50,000. If any gate (G1–G4) is open, state that all three offers assume remediation before submission.

============================================================ SECTION 19 — FINAL SCORECARD ============================================================

Return:

Category
Score
Repository Size
X/10
Application Maturity
X/10
Executability
X/10
End-to-End Completeness
X/10
Originality
X/10
Code Quality
X/10
Readability
X/10
Code Completeness
X/10
Git History
X/10
PR / Review Maturity
X/10
Testing Maturity
X/10
Technical Complexity
X/10
Scalability
X/10
Security
X/10
Reusability
X/10
Vendor Qualification
X/10
AI Code Likelihood
X/10
Effective LOC (L)
X
LOC Size Factor (LOCf)
X.XXXX
Maturity and Commercial Readiness (M)
X/10
Engineering Score (E)
X/10
NoRealTests Flag
0 / 1
LegacyStack Flag
0 / 1
Open Gates
G1–G4 / none
Valuation Confidence
High / Medium / Low
============================================================ SECTION 20 — FINAL COMMERCIAL CALCULATION ============================================================

Show the calculation exactly and in this order.

Raw Tracked Code (all languages, cloc --vcs=git): X

Production Logic LOC (by language): X

Vendored / Third-Party LOC (excluded): X

Test LOC (excluded; test-to-production ratio): X (X%)

Embedded Data LOC (excluded): X

Generated LOC (excluded): X

Duplicated LOC (excluded; rule D1 / D2): X / UNKNOWN

Configuration and Documentation LOC (excluded): X

Authored Markup LOC (raw → × 0.5): X → X

Effective LOC (L): Logic − Embedded Data − Generated − Duplicates + 0.5 × Markup = X

LOC Counting Method: [Tool and version, options, file lists, classification rules applied, manual inclusions and exclusions]

Vendor Size Eligibility: PASS / FAIL / UNKNOWN

LOC Size Factor (LOCf): min(1, 1.2 × L / (L + 100,000)) = X.XXXX

Technical Complexity Score (C): Σ (category score × weight) = X.XX/10 [list all eleven category scores]

Maturity and Commercial Readiness Score (M): Σ (sub-score × weight) [÷ 0.95 if no PR evidence] = X.XX/10 [list all eight sub-scores], or UNKNOWN / NOT VERIFIED

Engineering Score (E): (C × 0.70) + (M × 0.30) = X.XX + X.XX = X.XX/10

Engineering Quality Multiplier (EngMult): 1 − (1 − E / 10)² = X.XXXX

Base Value: $50,000 × LOCf × EngMult = $XX,XXX

Evidence Flags: NoRealTests = 0 / 1 [evidence] LegacyStack = 0 / 1 [criteria met, with evidence]

Flag Multiplier (A): 0.5726^NoRealTests × 0.6234^LegacyStack = X.XXXX

Value Before Cap: Base Value × A = $XX,XXX

Maximum Vendor Price: $50,000

Final Estimated Commercial Value (V): min($50,000, max($0, Value Before Cap)) = $XX,XXX

Conservative Offer (0.80 × V): $XX,XXX

Recommended Offer (V): $XX,XXX

Maximum Justifiable Offer (min($50,000, 1.30 × V)): $XX,XXX

Open Gates and Required Remediation: G1 / G2 / G3 / G4 / none [details]

Confidence and Typical Error: High / Medium / Low; typical error about ±20%

Do not invent LOC counts, scores, flags, multipliers, runtime success, test coverage, or history. If an input is unknown, state that a definitive calculation is not possible and provide a conditional scenario only when assumptions are explicit. Use only effective LOC (L) in the LOC Size Factor. Exclude third-party/vendored code, generated code, embedded data, duplicated copies, tests, and code the submitter does not own or is not authorized to submit. Report uncertain ownership or classification separately and do not count it until verified.

============================================================ SECTION 21 — FINAL EXECUTIVE SUMMARY ============================================================

Return:

Repository: [Name]

Size: [Effective LOC (L) = X; raw tracked code = X]

Vendor Size Requirement: PASS / FAIL

Application Type: [Type]

Executable: YES / PARTIAL / NO

End-to-End: YES / PARTIAL / NO

Maturity: X/10

Code Quality: X/10

Code Completeness: X/10

Originality: X/10

Git History: X/10

PR Maturity: X/10 / NOT AVAILABLE

Testing: X/10

AI Code Likelihood: X/10

Technical Complexity: X/10

Vendor Qualification: X/10

Estimated Development Effort: X person-months

Effective LOC (L): X

LOC Size Factor (LOCf): X.XXXX

Maturity and Commercial Readiness (M): X/10

Engineering Score (E): X/10

Base Value: $XX,XXX

Evidence Flags: NoRealTests 0 / 1 · LegacyStack 0 / 1 · Flag Multiplier X.XXXX

Estimated Commercial Value (V): $XX,XXX

Conservative Offer: $XX,XXX

Recommended Offer: $XX,XXX

Maximum Justifiable Offer: $XX,XXX

Open Gates: G1 / G2 / G3 / G4 / none

Valuation Confidence: High / Medium / Low (typical error about ±20%)

============================================================ FINAL DECISION ============================================================

Answer these questions directly:

Does the repository meet the vendor's size requirement?
Is it a large repository?
Is it a mature application?
Is it a complete executable application?
Is it truly end-to-end according to the vendor's definition?
Is it more than a collection of loose scripts?
Is it more than an incomplete codebase?
Is the implementation substantially original?
Does it contain third-party dependencies or assets requiring ownership/license verification?
Does it contain potential PII or sensitive information?
Does it contain meaningful Git history, changes, and commits?
Are pull requests available?
Is testing mature?
Is the code well-written and readable?
What are the most technically complex parts?
What is the Technical Complexity Score?
How difficult would it be to reproduce the application?
What is the complexity-based value?
What is the recommended vendor offer?
What is the maximum justifiable offer?
============================================================ IMPORTANT RULES ============================================================

Inspect the entire repository before producing the final assessment.
Base conclusions on actual repository evidence.
Do not fabricate evidence.
Do not invent PRs.
Do not invent test coverage.
Do not invent Git history.
Do not invent runtime success.
Do not claim ownership of third-party assets without evidence.
Do not expose actual secrets discovered during scanning.
Do not treat third-party libraries as original development.
Do not treat generated code as equivalent to original engineering effort.
Do not use LOC as the primary measure of technical complexity. For commercial valuation only, use effective LOC (L, Section 17.1) through the normalized continuous LOC Size Factor defined in Section 17.3. Do not use fixed LOC tiers, LOC-based valuation ceilings, or stepwise multipliers.
Do not award complexity points merely for having many files.
Do not automatically classify a large repository as mature.
Do not automatically classify a repository as end-to-end.
End-to-end means COMPLETE AND EXECUTABLE CODEBASE, not loose scripts or incomplete snippets.
Technical Complexity must be calculated BEFORE commercial valuation.
Technical Complexity is the largest contributor to the Engineering Score, while the continuous LOC Size Factor scales the total valuation potential. High complexity must not override a small qualifying codebase.
Apply no premium or discount other than the two evidence flags in Section 17.7. Gates (Section 17.8) and vendor qualification affect the recommendation, not the value. Never alter model parameters or inputs to reach a desired value.
Maximum offer is $50,000.
Be conservative where evidence is insufficient.
Clearly distinguish:

Facts
Evidence
Inference
Unknown information
Reference concrete:

File paths
Modules
Classes
Functions
Algorithms
Commits
PRs
Tests
Do not inflate the score to achieve a higher offer.
Do not reduce the score simply because AI assistance may have been used.
AI likelihood, technical complexity, maturity, completeness, and commercial value are separate measurements.
The final recommended offer must be defensible from the actual repository.
============================================================ SECTION 22 — EXECUTIVE SUMMARY ============================================================

Provide a concise, decision-oriented summary for a reviewer who may not read the full technical analysis. Include:

What the repository is and what complete application/system it implements.
Whether it is demonstrably executable and end-to-end.
Effective LOC (L), the raw tracked LOC it was derived from, and the vendor size-eligibility result.
The strongest evidence of technical complexity and the main engineering risks.
The maturity, originality, testing, Git history, and ownership findings that most affect qualification.
The Technical Complexity Score, LOC Size Factor, Maturity/Readiness Score, Engineering Score, evidence flags, open gates, final estimated value, and valuation confidence, where evidence supports them.
Any blocking unknowns that prevent a reliable valuation.
Clearly separate verified facts from inference. Do not present an estimated value as a guaranteed offer or as the vendor's confirmed pricing policy.

============================================================ SECTION 23 — FINAL RECOMMENDATION ============================================================

Give one clear recommendation:

SUBMIT — the repository appears to meet the key requirements and material risks have been reviewed.
SUBMIT AFTER REMEDIATION — identify the specific work required before submission.
DO NOT SUBMIT YET — explain the blocking gaps, such as unverified ownership, excluded or duplicated LOC, missing executable paths, severe quality issues, exposed sensitive information, or insufficient evidence.
INSUFFICIENT EVIDENCE — use when the repository could not be assessed reliably.
Map gates (Section 17.8) to the recommendation:

No open gate → SUBMIT.
One or more fixable gates (G1 secrets/PII, G2 licence/ownership, G3 critical safety defect) → SUBMIT AFTER REMEDIATION, listing each fix.
Secrets spread across several products, critical safety defects together with other open gates, or G4 (a bundle of unrelated products) → DO NOT SUBMIT YET.
Then state:

Recommended offer range, if supportable.
Recommended target offer, if supportable.
Maximum justifiable offer under the proposed model, never above $50,000.
The three strongest pieces of evidence supporting the recommendation.
The three most important risks or unknowns.
The exact next steps needed to improve submission readiness or valuation confidence.
Do not manufacture a price when required inputs are unknown. If no defensible price can be calculated, state which evidence or review scores are missing.

============================================================ ANALYZER-INFORMED EVIDENCE AND LIMITATIONS ============================================================

Use automated repository-analysis output as evidence to investigate, not as unquestionable proof. The analyzer may identify languages, files, frameworks, dependencies, infrastructure, tests, repository metadata, Git history, pull requests, potential secrets, and an initial authored-LOC estimate. Cite the relevant report field and underlying repository evidence where possible.

Important limitations:

An automated authored-LOC result is provisional until generated code, third-party/vendored code, duplicate copies, build artifacts, and unowned or unauthorized code have been excluded.
A repository scanner cannot establish legal ownership or submission authorization from source code alone. Require license, provenance, and ownership review where needed.
Duplicate detection and generated-code detection are heuristic unless independently verified; describe the method and residual uncertainty.
A categorical label such as High, Moderate, or Low is not automatically a numeric 0–10 technical-complexity score. Do not silently convert it. Score complexity from the rubric and concrete evidence in Sections 13–14.
Detected tests or test files do not prove test coverage, test quality, or successful execution. Report observed test evidence separately from verified execution and coverage.
Detected frameworks, dependencies, or build files do not prove the complete application builds or runs. Verify commands, environment requirements, and execution results.
Git commit counts and pull-request metadata are evidence of repository activity, not proof of authorship, work quality, or a complete development timeline.
Potential secret matches must be reported safely without reproducing credential values. Mark false positives and remediation status when verified.
If the analyzer source, report, or repository scan is incomplete, state the limitation and do not imply that the entire repository was inspected.
The final assessment must preserve all 23 requested output topics below. Do not omit or silently merge topics 21, 22, or 23.

============================================================ FINAL OUTPUT ORDER ============================================================

Repository Profile
Size Eligibility
End-to-End Assessment
Executability Assessment
Application Maturity
Originality Assessment
Third-Party Dependency & Asset Audit
PII & Sensitive Information Audit
Git History Analysis
Pull Request Analysis
Testing & Coverage
Code Quality & Readability
AI-Generated Code Likelihood
Deep Technical Complexity Analysis
Technical Complexity Score
Development Effort
Vendor Qualification Score
Commercial Valuation
Conservative / Recommended / Maximum Offers
Final Scorecard
Final Commercial Calculation
Executive Summary
Final Recommendation
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
