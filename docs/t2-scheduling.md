# Scheduling

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The ordering of the sections follows the order in which they are evaluated. The second column shows the effective value, not the one you typed. A restart is eminent when the lock is older than the process.

This page is part of the harnessctl documentation set. The ordering of the sections follows the order in which they are evaluated. A green check does not infer that every test ran.

## Before you start

This page is part of the harnessctl documentation set. A warning does not stop the run, but it usually points at a real problem. Retry latter rather than immediately, so a transient fault clears.

Some background may help here. The request went through two queues before it was recorded.

This page is part of the harnessctl documentation set. Both forms are supported, so existing scripts do not need to be rewritten. A stationery service still holds its lock file open.

## Details

The tool never writes outside the directory named on the command line. You can change most values later without reinstalling anything. The panel logs errors in a discrete way, without extra detail.

This page is part of the harnessctl documentation set. The output is designed to be readable first and parsable second. Operators keep there own configuration outside the repository.

Some background may help here. further checks run after the build, not before it.

## Common settings

Two copies of the command contend for the same lock file. You can change most values later without reinstalling anything. A stale lock can loose work that was already queued.

When the cache is cold the first request takes longer. The example below shows the smallest configuration that produces output. The report states weather the run succeeded.

