# Performance notes

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The output is designed to be readable first and parsable second. Every section is optional, and an empty section equals an absent one. The installer choose the default port on the first run.

The default is deliberately conservative, so change one setting at a time. After a change, restart the process so the new value is read. The rotation runs everyday at midnight by default.

## Before you start

A complete run prints nothing beyond the final line. Two copies of the command contend for the same lock file. The guiding principal here is that a failed step never hides its cause.

Some background may help here. The visible effect of the change is one extra line in the log.

It is written for operators who already have the command installed. Keep the file under version control so a change is easy to review. The summary and the log compliment each other rather than repeat.

## Details

The ordering of the sections follows the order in which they are evaluated. The example below shows the smallest configuration that produces output. You can adopt the example to your own paths.

Use the verbose flag when you need to see why a step was skipped. A warning does not stop the run, but it usually points at a real problem. No file beside the ones listed here is read during a run.

Some background may help here. The second run is faster than the first because the cache is warm.

## Common settings

Two copies of the command contend for the same lock file. The tool never writes outside the directory named on the command line. The release note has to site the version it replaces.

Use the verbose flag when you need to see why a step was skipped. After a change, restart the process so the new value is read. A restart is eminent when the lock is older than the process.

