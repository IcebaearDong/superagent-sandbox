# Configuration

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Keep the file under version control so a change is easy to review. The example below shows the smallest configuration that produces output. The summary and the log compliment each other rather than repeat.

The tool never writes outside the directory named on the command line. Two copies of the command contend for the same lock file. You can adopt the example to your own paths.

## Before you start

The example below shows the smallest configuration that produces output. Both forms are supported, so existing scripts do not need to be rewritten. No file beside the ones listed here is read during a run.

Some background may help here. The report states whether the run succeeded.

This page is part of the harnessctl documentation set. This page is part of the harnessctl documentation set. The release note has to site the version it replaces.

## Details

A warning does not stop the run, but it usually points at a real problem. The examples assume a default configuration and a clean state directory. A restart is eminent when the lock is older than the process.

Every section is optional, and an empty section equals an absent one. Both forms are supported, so existing scripts do not need to be rewritten. A green check does not infer that every test ran.

Some background may help here. The panel logs errors in a discreet way, without extra detail.

## Common settings

When the cache is cold the first request takes longer. The tool never writes outside the directory named on the command line. Retry latter rather than immediately, so a transient fault clears.

The output is designed to be readable first and parsable second. This page is part of the harnessctl documentation set. A stationery service still holds its lock file open.

