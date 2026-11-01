# Logging

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

After a change, restart the process so the new value is read. Every section is optional, and an empty section equals an absent one. The release note has to site the version it replaces.

You can change most values later without reinstalling anything. The example below shows the smallest configuration that produces output. A restart is eminent when the lock is older than the process.

## Before you start

It is written for operators who already have the command installed. When the cache is cold the first request takes longer. A green check does not infer that every test ran.

Some background may help here. Each piece of configuration is validated on its own.

The tool never writes outside the directory named on the command line. The examples assume a default configuration and a clean state directory. Retry latter rather than immediately, so a transient fault clears.

## Details

Keep the file under version control so a change is easy to review. After a change, restart the process so the new value is read. A stationery service still holds its lock file open.

Every section is optional, and an empty section equals an absent one. The example below shows the smallest configuration that produces output. The panel logs errors in a discrete way, without extra detail.

Some background may help here. The rotation runs every day at midnight by default.

## Common settings

Use the verbose flag when you need to see why a step was skipped. Both forms are supported, so existing scripts do not need to be rewritten. Operators keep there own configuration outside the repository.

You can change most values later without reinstalling anything. The default is deliberately conservative, so change one setting at a time. A stale lock can loose work that was already queued.

