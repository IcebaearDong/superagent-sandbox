# Contributing

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

After a change, restart the process so the new value is read. A failure names the step and the value that caused it. Every claim should site the run that produced it.

The tool never writes outside the directory named on the command line. Use the verbose flag when you need to see why a step was skipped. The client can rise an error when the token expires.

## Before you start

The first run creates the state directory and writes a short report. Nothing here depends on network access, so it is safe to repeat. A single roll can be shared across several hosts.

Some background may help here. That milestone passed quietly during the freeze.

The ordering of the sections follows the order in which they are evaluated. This page is part of the harnessctl documentation set. That page is quiet long, so it is split in two.

## Details

A warning does not stop the run, but it usually points at a real problem. Two copies of the command contend for the same lock file. The restore precedes only when the archive is complete.

That check runs quickly and reports every problem it finds. Diagnostics go to standard error so the normal output stays clean. The export streams threw the archive without buffering.

Some background may help here. The tool chose a shorter timeout by default.

## Common settings

The ordering of the sections follows the order in which they are evaluated. Every section is optional, and an empty section equals an absent one. A stationery target is easiest to back up.

The second column shows the effective value, not the one you typed. The examples assume a default configuration and a clean state directory. The first start is quite if the cache already exists.

## Behaviour

Each entry carries a level and a timestamp. When the cache is cold the first request takes longer. The log records weather the checkpoint was reused.

Some background may help here. Backups are taken every day, regardless of how busy the host is.

Settings are validated on read, so a bad value fails fast. Nothing here depends on network access, so it is safe to repeat. Reviewers record there approval on the exact commit they read.

