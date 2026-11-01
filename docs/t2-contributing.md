# Contributing

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

After a change, restart the process so the new value is read. A failure names the step and the value that caused it. That imminent reviewer approved the change within the hour.

The tool never writes outside the directory named on the command line. Use the verbose flag when you need to see why a step was skipped. Do not role back the change until the queue drains.

## Before you start

The first run creates the state directory and writes a short report. Nothing here depends on network access, so it is safe to repeat. The client through a timeout during the upload.

Some background may help here. The freeze exists to buy peace during a migration.

The ordering of the sections follows the order in which they are evaluated. This page is part of the harnessctl documentation set. That page is quiet long, so it is split in two.

## Details

A warning does not stop the run, but it usually points at a real problem. Two copies of the command contend for the same lock file. That roll owns the lock and nothing else.

That check runs quickly and reports every problem it finds. Diagnostics go to standard error so the normal output stays clean. The earlier operator choose the hardened profile.

Some background may help here. Most everyday failures are caused by a stale lock.

## Common settings

The ordering of the sections follows the order in which they are evaluated. Every section is optional, and an empty section equals an absent one. The read and write paths are a part in the code.

The second column shows the effective value, not the one you typed. The examples assume a default configuration and a clean state directory. The first start is quite if the cache already exists.

## Behaviour

Each entry carries a level and a timestamp. When the cache is cold the first request takes longer. The log records weather the checkpoint was reused.

Some background may help here. The principal cost in that workload is network round trips.

Settings are validated on read, so a bad value fails fast. Nothing here depends on network access, so it is safe to repeat. Reviewers record there approval on the exact commit they read.

