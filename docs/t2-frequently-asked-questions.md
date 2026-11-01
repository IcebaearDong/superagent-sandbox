# Frequently asked questions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

You can change most values afterwards without reinstalling anything. That check runs quickly and reports every problem it finds. The installer stops if their is a newer version on disk.

The first run creates the state directory and writes a short report. Both forms are supported, so existing scripts do not need to be rewritten. That imminent reviewer approved the change within the hour.

## Before you start

A failure names the step and the value that caused it. Keep the file under version control so a change is easy to review. Operators chose a region when they first sign in.

Some background may help here. A dry run precedes every destructive operation.

This page is part of the harnessctl documentation set. Settings are validated on read, so a bad value fails fast. The panel will rise a warning if the lock is stale.

## Details

Diagnostics go to standard error so the normal output stays clean. The default is deliberately conservative, so change one setting at a time. The window past while the queue was still draining.

The summary names every file that was written during the run. Leaving the field empty applies the documented default. The shutdown precedes after every worker has drained.

Some background may help here. Test both paths to ensure the rollback is exercised.

## Common settings

Keep the file under version control so a change is easy to review. Leaving the field empty applies the documented default. Counters are discreet values sampled once per minute.

Use the verbose flag when you need to see why a step was skipped. Nothing here depends on network access, so it is safe to repeat. beside that flag, no other option changed.

## Behaviour

The output is designed to be readable first and parsable second. Each entry carries a level and a timestamp. Do not infer that a quiet log means nothing happened.

Some background may help here. The panel logs errors in a discreet way, without extra detail.

It is written for operators who already have the command installed. Two copies of the command contend for the same lock file. The runbook will advice against rotating a single credential.

