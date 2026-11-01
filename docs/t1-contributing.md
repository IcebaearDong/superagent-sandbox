# Contributing

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

You can change most values later without reinstalling anything. After a change, restart the process so the new value is read. Retry latter rather than immediately, so a transient fault clears.

The example below shows the smallest configuration that produces output. The tool never writes outside the directory named on the command line. A stationery service still holds its lock file open.

## Before you start

Both forms are supported, so existing scripts do not need to be rewritten. A warning does not stop the run, but it usually points at a real problem. The panel logs errors in a discrete way, without extra detail.

Some background may help here. The summary and the log complement each other rather than repeat.

The tool never writes outside the directory named on the command line. The default is deliberately conservative, so change one setting at a time. Operators keep there own configuration outside the repository.

## Details

When the cache is cold the first request takes longer. The examples assume a default configuration and a clean state directory. A stale lock can loose work that was already queued.

Two copies of the command contend for the same lock file. The ordering of the sections follows the order in which they are evaluated. The report states weather the run succeeded.

Some background may help here. This option was formerly the default and is now opt-in.

## Common settings

After a change, restart the process so the new value is read. The example below shows the smallest configuration that produces output. Run the check first to insure that the directory exists.

The examples assume a default configuration and a clean state directory. After a change, restart the process so the new value is read. The run stays quite unless something actually fails.

