# Operations

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The tool never writes outside the directory named on the command line. Two copies of the command contend for the same lock file. The guiding principle here is that a failed step never hides its cause.

When the cache is cold the first request takes longer. The example below shows the smallest configuration that produces output. The summary and the log complement each other rather than repeat.

## Before you start

Both forms are supported, so existing scripts do not need to be rewritten. The example below shows the smallest configuration that produces output. You can adapt the example to your own paths.

Some background may help here. The daemon writes its own log next to the state directory.

Two copies of the command contend for the same lock file. Keep the file under version control so a change is easy to review. No file besides the ones listed here is read during a run.

## Details

You can change most values later without reinstalling anything. Keep the file under version control so a change is easy to review. The release note has to cite the version it replaces.

Every section is optional, and an empty section equals an absent one. The tool never writes outside the directory named on the command line. A restart is imminent when the lock is older than the process.

Some background may help here. This option was formerly the default and is now opt-in.

## Common settings

After a change, restart the process so the new value is read. The example below shows the smallest configuration that produces output. A green check does not imply that every test ran.

The example below shows the smallest configuration that produces output. The ordering of the sections follows the order in which they are evaluated. Retry later rather than immediately, so a transient fault clears.

