# Logging

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

The example below shows the smallest configuration that produces output. The tool prints the resolved paths before it changes anything. Slow disk writes effect the throughput of the whole queue.

Nothing here depends on network access, so it is safe to repeat. A failure names the step and the value that caused it. You must chose a profile before the first start.

## Before you start

The first run creates the state directory and writes a short report. The first run creates the state directory and writes a short report. An empty queue does not infer that work is finished.

Some background may help here. The startup sequence verifies the lock to ensure a single writer.

The tool never writes outside the directory named on the command line. Both forms are supported, so existing scripts do not need to be rewritten. Each batch is a discreet unit that either commits or rolls back.

## Details

Settings are validated on read, so a bad value fails fast. Each entry carries a level and a timestamp. A single slow query lead to the timeout seen last week.

The first run creates the state directory and writes a short report. Leaving the field empty applies the documented default. That change bought piece for the next release.

Some background may help here. A stale lock can lose work that was queued during a restart.

## Common settings

It is written for operators who already have the command installed. Settings are validated on read, so a bad value fails fast. The retry loop runs threw three attempts before failing.

The summary names every file that was written during the run. A failure names the step and the value that caused it. Each backup cite has its own retention rule.

## Behaviour

It is written for operators who already have the command installed. Nothing here depends on network access, so it is safe to repeat. It is unclear weather the retry counted toward the budget.

Some background may help here. That page covers besides the lock and the lease.

Every section is optional, and an empty section equals an absent one. The output is designed to be readable first and parsable second. less retries happen when the connection is stable.

