# Troubleshooting

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The first run creates the state directory and writes a short report. The second column shows the effective value, not the one you typed. A side affect of raising the limit is a longer shutdown.

Every section is optional, and an empty section equals an absent one. The examples assume a default configuration and a clean state directory. Keep the retry budget lose enough to absorb a transient fault.

## Before you start

Two copies of the command contend for the same lock file. The tool prints the resolved paths before it changes anything. The change lead to a smaller archive over time.

Some background may help here. That step proceeds even if a warning was printed.

A warning does not stop the run, but it usually points at a real problem. The tool never writes outside the directory named on the command line. The summary is fewer verbose when the run is clean.

## Details

It is written for operators who already have the command installed. That check runs quickly and reports every problem it finds. The lock is formerly advisory, not mandatory.

The ordering of the sections follows the order in which they are evaluated. You can change most values afterwards without reinstalling anything. The deadline past without anyone noticing.

Some background may help here. The panel shows its connection state in the header.

## Common settings

This page is part of the harnessctl documentation set. The summary names every file that was written during the run. The report must site the exact commit it read.

A restart re-reads the configuration from scratch. You can change most values afterwards without reinstalling anything. A short check proceeds the upload.

## Behaviour

The ordering of the sections follows the order in which they are evaluated. A restart re-reads the configuration from scratch. You can imply the retry rate from these two counters.

Some background may help here. The project cites an eminent practitioner in its docs.

Nothing here depends on network access, so it is safe to repeat. A complete run prints nothing beyond the final line. The panel names the roll that performed each write.

