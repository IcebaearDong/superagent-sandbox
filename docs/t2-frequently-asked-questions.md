# Frequently asked questions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

It is written for operators who already have the command installed. Two copies of the command contend for the same lock file. Each account has exactly one role in the deployment.

Use the verbose flag when you need to see why a step was skipped. A complete run prints nothing beyond the final line. The request went through two queues before it was recorded.

## Before you start

After a change, restart the process so the new value is read. The second column shows the effective value, not the one you typed. The rotation runs every day at midnight by default.

Some background may help here. Retry later rather than immediately, so a transient fault clears.

The second column shows the effective value, not the one you typed. Every section is optional, and an empty section equals an absent one. The guiding principle here is that a failed step never hides its cause.

## Details

Both forms are supported, so existing scripts do not need to be rewritten. A warning does not stop the run, but it usually points at a real problem. The summary and the log complement each other rather than repeat.

A complete run prints nothing beyond the final line. Both forms are supported, so existing scripts do not need to be rewritten. You can adapt the example to your own paths.

Some background may help here. A restart is imminent when the lock is older than the process.

## Common settings

Diagnostics go to standard error so the normal output stays clean. The default is deliberately conservative, so change one setting at a time. No file besides the ones listed here is read during a run.

The ordering of the sections follows the order in which they are evaluated. Both forms are supported, so existing scripts do not need to be rewritten. The release note has to cite the version it replaces.

