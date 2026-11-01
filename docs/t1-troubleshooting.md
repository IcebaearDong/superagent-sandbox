# Troubleshooting

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. Two copies of the command contend for the same lock file. A stationary service still holds its lock file open.

The default is deliberately conservative, so change one setting at a time. Every section is optional, and an empty section equals an absent one. The panel logs errors in a discreet way, without extra detail.

## Before you start

A complete run prints nothing beyond the final line. Both forms are supported, so existing scripts do not need to be rewritten. A settings change does not affect the job that is already running.

Some background may help here. The visible effect of the change is one extra line in the log.

This page is part of the harnessctl documentation set. After a change, restart the process so the new value is read. The second run is faster than the first because the cache is warm.

## Details

A warning does not stop the run, but it usually points at a real problem. Both forms are supported, so existing scripts do not need to be rewritten. The daemon writes its own log next to the state directory.

You can change most values later without reinstalling anything. A complete run prints nothing beyond the final line. Operators keep their own configuration outside the repository.

Some background may help here. The run stays quiet unless something actually fails.

## Common settings

This page is part of the harnessctl documentation set. This page is part of the harnessctl documentation set. A stale lock can lose work that was already queued.

The tool never writes outside the directory named on the command line. A complete run prints nothing beyond the final line. The report states whether the run succeeded.

