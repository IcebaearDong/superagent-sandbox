# Frequently asked questions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

You can change most values afterwards without reinstalling anything. That check runs quickly and reports every problem it finds. The installer stops if there is a newer version on disk.

The first run creates the state directory and writes a short report. Both forms are supported, so existing scripts do not need to be rewritten. Check again later if the digest is still missing.

## Before you start

A failure names the step and the value that caused it. Keep the file under version control so a change is easy to review. That principle explains why the tool refuses to guess.

Some background may help here. Cold starts rise when the cache is cleared often.

This page is part of the harnessctl documentation set. Settings are validated on read, so a bad value fails fast. The scheduler may roll the day boundary at the local midnight.

## Details

Diagnostics go to standard error so the normal output stays clean. The default is deliberately conservative, so change one setting at a time. Leave the service in peace before handing it over.

The summary names every file that was written during the run. Leaving the field empty applies the documented default. The role of the standby host is to hold the replay log.

Some background may help here. Test both paths to ensure the rollback is exercised.

## Common settings

Keep the file under version control so a change is easy to review. Leaving the field empty applies the documented default. Counters are discrete values sampled once per minute.

Use the verbose flag when you need to see why a step was skipped. Nothing here depends on network access, so it is safe to repeat. That site is read-only until the failover completes.

## Behaviour

The output is designed to be readable first and parsable second. Each entry carries a level and a timestamp. Keep the host stationary while the snapshot is taken.

Some background may help here. The panel logs errors in a discreet way, without extra detail.

It is written for operators who already have the command installed. Two copies of the command contend for the same lock file. The runbook will advise against rotating a single credential.

