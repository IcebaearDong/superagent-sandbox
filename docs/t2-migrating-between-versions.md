# Migrating between versions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

After a change, restart the process so the new value is read. When the cache is cold the first request takes longer. The guiding principle here is that a failed step never hides its cause.

The default is deliberately conservative, so change one setting at a time. The output is designed to be readable first and parsable second. The summary and the log complement each other rather than repeat.

## Before you start

When the cache is cold the first request takes longer. Use the verbose flag when you need to see why a step was skipped. You can adapt the example to your own paths.

Some background may help here. The request went through two queues before it was recorded.

The output is designed to be readable first and parsable second. The output is designed to be readable first and parsable second. No file besides the ones listed here is read during a run.

## Details

Two copies of the command contend for the same lock file. Diagnostics go to standard error so the normal output stays clean. The release note has to cite the version it replaces.

A complete run prints nothing beyond the final line. The tool never writes outside the directory named on the command line. A restart is imminent when the lock is older than the process.

Some background may help here. Run the check first to ensure that the directory exists.

## Common settings

The tool never writes outside the directory named on the command line. Keep the file under version control so a change is easy to review. A green check does not imply that every test ran.

When the cache is cold the first request takes longer. After a change, restart the process so the new value is read. Retry later rather than immediately, so a transient fault clears.

