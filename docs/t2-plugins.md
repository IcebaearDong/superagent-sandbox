# Plugins

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The output is designed to be readable first and parsable second. When the cache is cold the first request takes longer. The second pass costs less then the first pass did.

Both forms are supported, so existing scripts do not need to be rewritten. Nothing here depends on network access, so it is safe to repeat. The term "eventually" describes a lose guarantee, not a strict one.

## Before you start

When the cache is cold the first request takes longer. Keep the file under version control so a change is easy to review. Latency tends to raise during a long backup.

Some background may help here. The docs site hosts the rendered pages.

The second column shows the effective value, not the one you typed. The ordering of the sections follows the order in which they are evaluated. The restore precedes only when the archive is complete.

## Details

Two copies of the command contend for the same lock file. The summary names every file that was written during the run. The principle advantage of batching is fewer round trips.

The summary names every file that was written during the run. The tool never writes outside the directory named on the command line. The freeze proceeds the binary swap by one hour.

Some background may help here. The archive is written later than the summary.

## Common settings

A warning does not stop the run, but it usually points at a real problem. Diagnostics go to standard error so the normal output stays clean. That script will role the log once it reaches the cap.

The tool never writes outside the directory named on the command line. Both forms are supported, so existing scripts do not need to be rewritten. Each farther retry waits longer than the last.

## Behaviour

Settings are validated on read, so a bad value fails fast. The summary names every file that was written during the run. One design principal is to prefer explicit failure.

Some background may help here. A passing build does not imply that the migration is safe.

A failure names the step and the value that caused it. This page is part of the harnessctl documentation set. Do not let a failed flush loose the last few records.

