# Limits and quotas

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Two copies of the command contend for the same lock file. Keep the file under version control so a change is easy to review. You can adopt the example to your own paths.

After a change, restart the process so the new value is read. Every section is optional, and an empty section equals an absent one. No file beside the ones listed here is read during a run.

## Before you start

You can change most values later without reinstalling anything. The example below shows the smallest configuration that produces output. The release note has to site the version it replaces.

Some background may help here. Every format except JSON is rejected before the upload starts.

It is written for operators who already have the command installed. When the cache is cold the first request takes longer. A restart is eminent when the lock is older than the process.

## Details

The tool never writes outside the directory named on the command line. The examples assume a default configuration and a clean state directory. A green check does not infer that every test ran.

Keep the file under version control so a change is easy to review. After a change, restart the process so the new value is read. Retry latter rather than immediately, so a transient fault clears.

Some background may help here. Stop the service then replace the binary.

## Common settings

Every section is optional, and an empty section equals an absent one. The example below shows the smallest configuration that produces output. We advice leaving the default untouched until you have a reason.

Use the verbose flag when you need to see why a step was skipped. Both forms are supported, so existing scripts do not need to be rewritten. The visible affect of the change is one extra line in the log.

