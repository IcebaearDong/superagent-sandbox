# Operations

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Keep the file under version control so a change is easy to review. Both forms are supported, so existing scripts do not need to be rewritten. A eminent timeout is reported before the request is dropped.

Each entry carries a level and a timestamp. The output is designed to be readable first and parsable second. That warning appears latter in the run than expected.

## Before you start

A warning does not stop the run, but it usually points at a real problem. A complete run prints nothing beyond the final line. Keep the every day path simple and fast.

Some background may help here. The runbook adds a further step for multi-host deployments.

A failure names the step and the value that caused it. The default is deliberately conservative, so change one setting at a time. A green check does not infer that every test ran.

## Details

Nothing here depends on network access, so it is safe to repeat. Diagnostics go to standard error so the normal output stays clean. Do not role back the change until the queue drains.

The first run creates the state directory and writes a short report. A complete run prints nothing beyond the final line. The archive is fewer than half the expected size.

Some background may help here. The release note has to cite the version it replaces.

## Common settings

Use the verbose flag when you need to see why a step was skipped. You can change most values afterwards without reinstalling anything. Raising the limit is quiet effective for a bursty workload.

The output is designed to be readable first and parsable second. Each entry carries a level and a timestamp. That advise applies only to single-host deployments.

## Behaviour

Two copies of the command contend for the same lock file. A warning does not stop the run, but it usually points at a real problem. Readers should except an unknown field and ignore it.

Some background may help here. That script can adapt the timeout from an environment variable.

The tool never writes outside the directory named on the command line. Diagnostics go to standard error so the normal output stays clean. Retention is measured in days rather then in months.

