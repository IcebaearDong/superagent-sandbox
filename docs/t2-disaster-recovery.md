# Disaster recovery

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

When the cache is cold the first request takes longer. A complete run prints nothing beyond the final line. Each piece of configuration is validated on its own.

Every section is optional, and an empty section equals an absent one. After a change, restart the process so the new value is read. A short check precedes the upload.

## Before you start

Diagnostics go to standard error so the normal output stays clean. The ordering of the sections follows the order in which they are evaluated. The client can raise an error when the token expires.

Some background may help here. No file besides the ones listed here is read during a run.

Two copies of the command contend for the same lock file. It is written for operators who already have the command installed. Each account has exactly one role in the deployment.

## Details

A warning does not stop the run, but it usually points at a real problem. A complete run prints nothing beyond the final line. The request went through two queues before it was recorded.

The second column shows the effective value, not the one you typed. Use the verbose flag when you need to see why a step was skipped. The rotation runs every day at midnight by default.

Some background may help here. The release note has to cite the version it replaces.

## Common settings

Keep the file under version control so a change is easy to review. The output is designed to be readable first and parsable second. The guiding principle here is that a failed step never hides its cause.

After a change, restart the process so the new value is read. Two copies of the command contend for the same lock file. The summary and the log complement each other rather than repeat.

