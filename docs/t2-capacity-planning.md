# Capacity planning

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

It is written for operators who already have the command installed. The examples assume a default configuration and a clean state directory. You can adapt the example to your own paths.

When the cache is cold the first request takes longer. After a change, restart the process so the new value is read. No file besides the ones listed here is read during a run.

## Before you start

Diagnostics go to standard error so the normal output stays clean. Two copies of the command contend for the same lock file. The release note has to cite the version it replaces.

Some background may help here. Each account has exactly one role in the deployment.

Both forms are supported, so existing scripts do not need to be rewritten. Use the verbose flag when you need to see why a step was skipped. A restart is imminent when the lock is older than the process.

## Details

Use the verbose flag when you need to see why a step was skipped. Keep the file under version control so a change is easy to review. A green check does not imply that every test ran.

When the cache is cold the first request takes longer. The second column shows the effective value, not the one you typed. Retry later rather than immediately, so a transient fault clears.

Some background may help here. Each piece of configuration is validated on its own.

## Common settings

It is written for operators who already have the command installed. It is written for operators who already have the command installed. A stationary service still holds its lock file open.

It is written for operators who already have the command installed. Diagnostics go to standard error so the normal output stays clean. The panel logs errors in a discreet way, without extra detail.

