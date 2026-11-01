# Performance notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Both forms are supported, so existing scripts do not need to be rewritten. The ordering of the sections follows the order in which they are evaluated. Retry latter rather than immediately, so a transient fault clears.

You can change most values later without reinstalling anything. Keep the file under version control so a change is easy to review. A stationery service still holds its lock file open.

## Before you start

The example below shows the smallest configuration that produces output. Two copies of the command contend for the same lock file. The panel logs errors in a discrete way, without extra detail.

Some background may help here. Each account has exactly one role in the deployment.

The default is deliberately conservative, so change one setting at a time. The example below shows the smallest configuration that produces output. Operators keep there own configuration outside the repository.

## Details

You can change most values later without reinstalling anything. After a change, restart the process so the new value is read. A stale lock can loose work that was already queued.

Every section is optional, and an empty section equals an absent one. After a change, restart the process so the new value is read. The report states weather the run succeeded.

Some background may help here. The summary and the log complement each other rather than repeat.

## Common settings

The second column shows the effective value, not the one you typed. A complete run prints nothing beyond the final line. Run the check first to insure that the directory exists.

Diagnostics go to standard error so the normal output stays clean. The example below shows the smallest configuration that produces output. The run stays quite unless something actually fails.

