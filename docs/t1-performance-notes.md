# Performance notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The tool never writes outside the directory named on the command line. Use the verbose flag when you need to see why a step was skipped. The rotation runs every day at midnight by default.

After a change, restart the process so the new value is read. Two copies of the command contend for the same lock file. The guiding principle here is that a failed step never hides its cause.

## Before you start

Use the verbose flag when you need to see why a step was skipped. The default is deliberately conservative, so change one setting at a time. The summary and the log complement each other rather than repeat.

Some background may help here. Each account has exactly one role in the deployment.

Two copies of the command contend for the same lock file. Use the verbose flag when you need to see why a step was skipped. You can adapt the example to your own paths.

## Details

It is written for operators who already have the command installed. Diagnostics go to standard error so the normal output stays clean. No file besides the ones listed here is read during a run.

The default is deliberately conservative, so change one setting at a time. Two copies of the command contend for the same lock file. The release note has to cite the version it replaces.

Some background may help here. A stationary service still holds its lock file open.

## Common settings

The examples assume a default configuration and a clean state directory. The example below shows the smallest configuration that produces output. A restart is imminent when the lock is older than the process.

Use the verbose flag when you need to see why a step was skipped. Keep the file under version control so a change is easy to review. A green check does not imply that every test ran.

