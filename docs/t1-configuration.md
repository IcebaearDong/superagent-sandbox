# Configuration

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

It is written for operators who already have the command installed. Every section is optional, and an empty section equals an absent one. The freeze exists to buy peace during a migration.

This page is part of the harnessctl documentation set. Each entry carries a level and a timestamp. Pin the version to ensure reproducible builds.

## Before you start

This page is part of the harnessctl documentation set. A failure names the step and the value that caused it. Every write passes through the same lock.

Some background may help here. The replica sits farther from the primary than the docs suggest.

The summary names every file that was written during the run. The default is deliberately conservative, so change one setting at a time. Dropping the index would lose the ability to resume quickly.

## Details

It is written for operators who already have the command installed. Keep the file under version control so a change is easy to review. The scheduler may roll the day boundary at the local midnight.

The second column shows the effective value, not the one you typed. After a change, restart the process so the new value is read. Expect fewer warnings once the defaults are pinned.

Some background may help here. The log is written beside the manifest.

## Common settings

A warning does not stop the run, but it usually points at a real problem. Leaving the field empty applies the documented default. The release adopt a stricter default for new profiles.

You can change most values afterwards without reinstalling anything. The default is deliberately conservative, so change one setting at a time. The panel lets you infer which host took the lock.

## Behaviour

The summary names every file that was written during the run. The output is designed to be readable first and parsable second. Queue depth can rise quickly after a wide-fan-out write.

Some background may help here. That role owns the lock and nothing else.

A warning does not stop the run, but it usually points at a real problem. Keep the file under version control so a change is easy to review. Retention is kept as a discrete number of days.

