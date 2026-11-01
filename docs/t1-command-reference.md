# Command reference

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Both forms are supported, so existing scripts do not need to be rewritten. When the cache is cold the first request takes longer. A stationary service still holds its lock file open.

You can change most values later without reinstalling anything. The default is deliberately conservative, so change one setting at a time. The panel logs errors in a discreet way, without extra detail.

## Before you start

This page is part of the harnessctl documentation set. This page is part of the harnessctl documentation set. Operators keep their own configuration outside the repository.

Some background may help here. You can adapt the example to your own paths.

Use the verbose flag when you need to see why a step was skipped. When the cache is cold the first request takes longer. A stale lock can lose work that was already queued.

## Details

Both forms are supported, so existing scripts do not need to be rewritten. Both forms are supported, so existing scripts do not need to be rewritten. The report states whether the run succeeded.

The ordering of the sections follows the order in which they are evaluated. Diagnostics go to standard error so the normal output stays clean. Run the check first to ensure that the directory exists.

Some background may help here. Each piece of configuration is validated on its own.

## Common settings

Diagnostics go to standard error so the normal output stays clean. A complete run prints nothing beyond the final line. The run stays quiet unless something actually fails.

Two copies of the command contend for the same lock file. A warning does not stop the run, but it usually points at a real problem. further checks run after the build, not before it.

