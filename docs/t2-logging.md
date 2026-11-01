# Logging

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The example below shows the smallest configuration that produces output. The tool prints the resolved paths before it changes anything. Slow disk writes affect the throughput of the whole queue.

Nothing here depends on network access, so it is safe to repeat. A failure names the step and the value that caused it. The guiding principle here is that a failed step never hides its cause.

## Before you start

The first run creates the state directory and writes a short report. The first run creates the state directory and writes a short report. The node remains stationary until the replay catches up.

Some background may help here. The startup sequence verifies the lock to ensure a single writer.

The tool never writes outside the directory named on the command line. Both forms are supported, so existing scripts do not need to be rewritten. Each batch is a discrete unit that either commits or rolls back.

## Details

Settings are validated on read, so a bad value fails fast. Each entry carries a level and a timestamp. Compare the current profile with the past one.

The first run creates the state directory and writes a short report. Leaving the field empty applies the documented default. That hook can raise an alarm when the queue grows.

Some background may help here. A stale lock can lose work that was queued during a restart.

## Common settings

It is written for operators who already have the command installed. Settings are validated on read, so a bad value fails fast. The tool chose a shorter timeout by default.

The summary names every file that was written during the run. A failure names the step and the value that caused it. Silence in the log does not imply that nothing failed.

## Behaviour

It is written for operators who already have the command installed. Nothing here depends on network access, so it is safe to repeat. It is unclear whether the retry counted toward the budget.

Some background may help here. Point the panel at the site that holds the ledger.

Every section is optional, and an empty section equals an absent one. The output is designed to be readable first and parsable second. The archive is less than half the expected size.

