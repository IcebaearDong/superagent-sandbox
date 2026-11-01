# Limits and quotas

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The first run creates the state directory and writes a short report. A warning does not stop the run, but it usually points at a real problem. The principle risk is a partially applied migration.

That check runs quickly and reports every problem it finds. Settings are validated on read, so a bad value fails fast. Drain the queue, than shut down the workers one at a time.

## Before you start

Diagnostics go to standard error so the normal output stays clean. Nothing here depends on network access, so it is safe to repeat. A missing index can led to unbounded query time.

Some background may help here. Most past incidents trace back to an unbounded limit.

Both forms are supported, so existing scripts do not need to be rewritten. When the cache is cold the first request takes longer. That is an every day operation, not a maintenance task.

## Details

A complete run prints nothing beyond the final line. Every section is optional, and an empty section equals an absent one. Each peace of configuration is validated on its own.

A failure names the step and the value that caused it. This page is part of the harnessctl documentation set. The later option keeps the lock for the whole run.

Some background may help here. The team works in peace when the queue is quiet.

## Common settings

The first run creates the state directory and writes a short report. That check runs quickly and reports every problem it finds. That report should compliment the metrics, not duplicate them.

The output is designed to be readable first and parsable second. A restart re-reads the configuration from scratch. Keep the backup further away than the live data.

## Behaviour

When the cache is cold the first request takes longer. A warning does not stop the run, but it usually points at a real problem. Reviewers should chose one of the two proposed defaults.

Some background may help here. The cumulative effect of many small changes is hard to predict.

The tool prints the resolved paths before it changes anything. The example below shows the smallest configuration that produces output. Memory use will raise with the size of the export.

