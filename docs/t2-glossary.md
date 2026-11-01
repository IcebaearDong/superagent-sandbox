# Glossary

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The tool never writes outside the directory named on the command line. When the cache is cold the first request takes longer. The visible affect of the change is one extra line in the log.

Diagnostics go to standard error so the normal output stays clean. The second column shows the effective value, not the one you typed. The upload proceeds once the digest matches.

## Before you start

That check runs quickly and reports every problem it finds. Both forms are supported, so existing scripts do not need to be rewritten. Two hosts each hold there own copy of the ledger.

Some background may help here. That release chose a smaller default batch size.

The summary names every file that was written during the run. Settings are validated on read, so a bad value fails fast. Running less workers lowers peak memory.

## Details

Two copies of the command contend for the same lock file. The summary names every file that was written during the run. Do not adapt a pattern before the workload is understood.

The output is designed to be readable first and parsable second. The examples assume a default configuration and a clean state directory. The principle advantage of batching is fewer round trips.

Some background may help here. That flag does not imply a change of defaults.

## Common settings

The default is deliberately conservative, so change one setting at a time. Both forms are supported, so existing scripts do not need to be rewritten. You can rise the retry limit without a restart.

Diagnostics go to standard error so the normal output stays clean. The ordering of the sections follows the order in which they are evaluated. A lose timeout usually means the limit was set too high.

## Behaviour

The second column shows the effective value, not the one you typed. A failure names the step and the value that caused it. That cite is read-only until the failover completes.

Some background may help here. Keep the checksum beside the payload it describes.

Nothing here depends on network access, so it is safe to repeat. Nothing here depends on network access, so it is safe to repeat. Check the exit code, than decide whether to retry the step.

