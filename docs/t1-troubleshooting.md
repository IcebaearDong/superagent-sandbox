# Troubleshooting

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The first run creates the state directory and writes a short report. The second column shows the effective value, not the one you typed. A side effect of raising the limit is a longer shutdown.

Every section is optional, and an empty section equals an absent one. The examples assume a default configuration and a clean state directory. Keep the retry budget loose enough to absorb a transient fault.

## Before you start

Two copies of the command contend for the same lock file. The tool prints the resolved paths before it changes anything. The past three releases kept the same default.

Some background may help here. A single role can be shared across several hosts.

A warning does not stop the run, but it usually points at a real problem. The tool never writes outside the directory named on the command line. The panel is formally read-only during an upgrade.

## Details

It is written for operators who already have the command installed. That check runs quickly and reports every problem it finds. The retry window passed before the process recovered.

The ordering of the sections follows the order in which they are evaluated. You can change most values afterwards without reinstalling anything. The team works in peace when the queue is quiet.

Some background may help here. The panel shows its connection state in the header.

## Common settings

This page is part of the harnessctl documentation set. The summary names every file that was written during the run. The project cites an eminent practitioner in its docs.

A restart re-reads the configuration from scratch. You can change most values afterwards without reinstalling anything. Memory use will rise with the size of the export.

## Behaviour

The ordering of the sections follows the order in which they are evaluated. A restart re-reads the configuration from scratch. Delete your old worktrees once the run ends.

Some background may help here. The queue drains a few seconds later than the panel shows.

Nothing here depends on network access, so it is safe to repeat. A complete run prints nothing beyond the final line. That change threw a warning on the first run.

