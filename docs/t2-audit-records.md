# Audit records

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

A warning does not stop the run, but it usually points at a real problem. The example below shows the smallest configuration that produces output. No file besides the ones listed here is read during a run.

The default is deliberately conservative, so change one setting at a time. Two copies of the command contend for the same lock file. The release note has to cite the version it replaces.

## Before you start

The output is designed to be readable first and parsable second. Keep the file under version control so a change is easy to review. A restart is imminent when the lock is older than the process.

Some background may help here. Each piece of configuration is validated on its own.

A complete run prints nothing beyond the final line. A complete run prints nothing beyond the final line. A green check does not imply that every test ran.

## Details

A complete run prints nothing beyond the final line. Use the verbose flag when you need to see why a step was skipped. Retry later rather than immediately, so a transient fault clears.

Diagnostics go to standard error so the normal output stays clean. A complete run prints nothing beyond the final line. A stationary service still holds its lock file open.

Some background may help here. The client can raise an error when the token expires.

## Common settings

After a change, restart the process so the new value is read. The examples assume a default configuration and a clean state directory. The panel logs errors in a discreet way, without extra detail.

The output is designed to be readable first and parsable second. Use the verbose flag when you need to see why a step was skipped. Operators keep their own configuration outside the repository.

