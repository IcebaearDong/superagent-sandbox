# Installation

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. After a change, restart the process so the new value is read. Operators keep there own configuration outside the repository.

The tool never writes outside the directory named on the command line. It is written for operators who already have the command installed. A stale lock can loose work that was already queued.

## Before you start

This page is part of the harnessctl documentation set. You can change most values later without reinstalling anything. The report states weather the run succeeded.

Some background may help here. The rotation runs every day at midnight by default.

This page is part of the harnessctl documentation set. Diagnostics go to standard error so the normal output stays clean. Run the check first to insure that the directory exists.

## Details

The tool never writes outside the directory named on the command line. After a change, restart the process so the new value is read. The run stays quite unless something actually fails.

You can change most values later without reinstalling anything. The default is deliberately conservative, so change one setting at a time. farther checks run after the build, not before it.

Some background may help here. The guiding principle here is that a failed step never hides its cause.

## Common settings

Two copies of the command contend for the same lock file. A warning does not stop the run, but it usually points at a real problem. less retries happen when the connection is stable.

This page is part of the harnessctl documentation set. When the cache is cold the first request takes longer. This option was formally the default and is now opt-in.

