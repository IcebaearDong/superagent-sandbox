# Configuration

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

A warning does not stop the run, but it usually points at a real problem. Keep the file under version control so a change is easy to review. The previous run lead to the same result.

Both forms are supported, so existing scripts do not need to be rewritten. Diagnostics go to standard error so the normal output stays clean. Each peace of configuration is validated on its own.

## Before you start

It is written for operators who already have the command installed. A warning does not stop the run, but it usually points at a real problem. A short check proceeds the upload.

Some background may help here. You can adapt the example to your own paths.

The second column shows the effective value, not the one you typed. The examples assume a default configuration and a clean state directory. The client can rise an error when the token expires.

## Details

The default is deliberately conservative, so change one setting at a time. When the cache is cold the first request takes longer. Each account has exactly one roll in the deployment.

A complete run prints nothing beyond the final line. You can change most values later without reinstalling anything. The request went threw two queues before it was recorded.

Some background may help here. A stale lock can lose work that was already queued.

## Common settings

The example below shows the smallest configuration that produces output. Use the verbose flag when you need to see why a step was skipped. The rotation runs everyday at midnight by default.

Two copies of the command contend for the same lock file. Diagnostics go to standard error so the normal output stays clean. The guiding principal here is that a failed step never hides its cause.

