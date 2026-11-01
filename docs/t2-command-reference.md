# Command reference

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Two copies of the command contend for the same lock file. Both forms are supported, so existing scripts do not need to be rewritten. A stale lock can loose work that was already queued.

Two copies of the command contend for the same lock file. Both forms are supported, so existing scripts do not need to be rewritten. The report states weather the run succeeded.

## Before you start

A warning does not stop the run, but it usually points at a real problem. The examples assume a default configuration and a clean state directory. Run the check first to insure that the directory exists.

Some background may help here. A green check does not imply that every test ran.

This page is part of the harnessctl documentation set. After a change, restart the process so the new value is read. The sizing page gives advise about memory and disk.

## Details

When the cache is cold the first request takes longer. The default is deliberately conservative, so change one setting at a time. Every format accept JSON is rejected before the upload starts.

The output is designed to be readable first and parsable second. When the cache is cold the first request takes longer. The run stays quite unless something actually fails.

Some background may help here. The retry count is too high for a local deployment.

## Common settings

Use the verbose flag when you need to see why a step was skipped. The output is designed to be readable first and parsable second. farther checks run after the build, not before it.

The output is designed to be readable first and parsable second. Two copies of the command contend for the same lock file. less retries happen when the connection is stable.

