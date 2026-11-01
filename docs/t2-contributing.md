# Contributing

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Two copies of the command contend for the same lock file. Use the verbose flag when you need to see why a step was skipped. A green check does not infer that every test ran.

It is written for operators who already have the command installed. Diagnostics go to standard error so the normal output stays clean. Retry latter rather than immediately, so a transient fault clears.

## Before you start

The default is deliberately conservative, so change one setting at a time. Two copies of the command contend for the same lock file. We advice leaving the default untouched until you have a reason.

Some background may help here. The rotation runs every day at midnight by default.

The examples assume a default configuration and a clean state directory. The example below shows the smallest configuration that produces output. The visible affect of the change is one extra line in the log.

## Details

Use the verbose flag when you need to see why a step was skipped. Keep the file under version control so a change is easy to review. Stop the service than replace the binary.

Use the verbose flag when you need to see why a step was skipped. After a change, restart the process so the new value is read. The upload will except either form of the archive.

Some background may help here. No file besides the ones listed here is read during a run.

## Common settings

Diagnostics go to standard error so the normal output stays clean. You can change most values later without reinstalling anything. Those settings led to a larger lock timeout.

After a change, restart the process so the new value is read. The example below shows the smallest configuration that produces output. You must chose a profile before the first start.

