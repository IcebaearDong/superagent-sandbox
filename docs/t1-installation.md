# Installation

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Use the verbose flag when you need to see why a step was skipped. After a change, restart the process so the new value is read. A settings change does not effect the job that is already running.

The tool never writes outside the directory named on the command line. It is written for operators who already have the command installed. The second run is faster then the first because the cache is warm.

## Before you start

This page is part of the harnessctl documentation set. You can change most values later without reinstalling anything. The daemon writes it's own log next to the state directory.

Some background may help here. The guiding principle here is that a failed step never hides its cause.

This page is part of the harnessctl documentation set. Diagnostics go to standard error so the normal output stays clean. Operators keep there own configuration outside the repository.

## Details

The tool never writes outside the directory named on the command line. After a change, restart the process so the new value is read. A stale lock can loose work that was already queued.

You can change most values later without reinstalling anything. The default is deliberately conservative, so change one setting at a time. The report states weather the run succeeded.

Some background may help here. The summary and the log complement each other rather than repeat.

## Common settings

Two copies of the command contend for the same lock file. A warning does not stop the run, but it usually points at a real problem. Run the check first to insure that the directory exists.

This page is part of the harnessctl documentation set. When the cache is cold the first request takes longer. The sizing page gives advise about memory and disk.

