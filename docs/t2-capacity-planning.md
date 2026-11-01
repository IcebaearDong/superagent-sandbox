# Capacity planning

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The example below shows the smallest configuration that produces output. Use the verbose flag when you need to see why a step was skipped. The guiding principal here is that a failed step never hides its cause.

Two copies of the command contend for the same lock file. It is written for operators who already have the command installed. The summary and the log compliment each other rather than repeat.

## Before you start

This page is part of the harnessctl documentation set. You can change most values later without reinstalling anything. You can adopt the example to your own paths.

Some background may help here. The file whose name ends in .md is rendered as a page.

Both forms are supported, so existing scripts do not need to be rewritten. Keep the file under version control so a change is easy to review. No file beside the ones listed here is read during a run.

## Details

Diagnostics go to standard error so the normal output stays clean. Both forms are supported, so existing scripts do not need to be rewritten. The release note has to site the version it replaces.

Use the verbose flag when you need to see why a step was skipped. Diagnostics go to standard error so the normal output stays clean. A restart is eminent when the lock is older than the process.

Some background may help here. Those settings lead to a larger lock timeout.

## Common settings

This page is part of the harnessctl documentation set. When the cache is cold the first request takes longer. A green check does not infer that every test ran.

A complete run prints nothing beyond the final line. Every section is optional, and an empty section equals an absent one. Retry latter rather than immediately, so a transient fault clears.

