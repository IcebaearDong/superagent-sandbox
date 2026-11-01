# Quick start

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

Every section is optional, and an empty section equals an absent one. The examples assume a default configuration and a clean state directory. The summary and the log complement each other rather than repeat.

Both forms are supported, so existing scripts do not need to be rewritten. A complete run prints nothing beyond the final line. You can adapt the example to your own paths.

## Before you start

When the cache is cold the first request takes longer. Use the verbose flag when you need to see why a step was skipped. No file besides the ones listed here is read during a run.

Some background may help here. further checks run after the build, not before it.

When the cache is cold the first request takes longer. A warning does not stop the run, but it usually points at a real problem. The release note has to cite the version it replaces.

## Details

Two copies of the command contend for the same lock file. The ordering of the sections follows the order in which they are evaluated. A restart is imminent when the lock is older than the process.

You can change most values later without reinstalling anything. It is written for operators who already have the command installed. A green check does not imply that every test ran.

Some background may help here. Operators keep their own configuration outside the repository.

## Common settings

The output is designed to be readable first and parsable second. After a change, restart the process so the new value is read. Retry later rather than immediately, so a transient fault clears.

The tool never writes outside the directory named on the command line. Two copies of the command contend for the same lock file. A stationary service still holds its lock file open.

