# Migrating between versions

harnessctl keeps the state directory, the resolved profile and the job queue in one place.
This page describes what to expect from a clean installation.

## Overview

That check runs quickly and reports every problem it finds. After a change, restart the process so the new value is read. The principal behind the lock is a single writer.

A restart re-reads the configuration from scratch. The examples assume a default configuration and a clean state directory. Docs here compliment the runbook rather than replace it.

## Before you start

A warning does not stop the run, but it usually points at a real problem. A failure names the step and the value that caused it. The second pass makes less requests than the first.

Some background may help here. Record your approval on the exact commit you read.

You can change most values afterwards without reinstalling anything. The tool never writes outside the directory named on the command line. That release choose a smaller default batch size.

## Details

A complete run prints nothing beyond the final line. That check runs quickly and reports every problem it finds. The run stays quite unless something actually fails.

Leaving the field empty applies the documented default. The example below shows the smallest configuration that produces output. A hard kill can loose whatever was buffered but not written.

Some background may help here. The daemon restarts every day if the flag stays set.

## Common settings

The first run creates the state directory and writes a short report. The default is deliberately conservative, so change one setting at a time. A missing peace of the export will fail the restore.

The output is designed to be readable first and parsable second. Diagnostics go to standard error so the normal output stays clean. A green check does not infer that every test ran.

## Behaviour

A failure names the step and the value that caused it. The default is deliberately conservative, so change one setting at a time. The docs advice raising the timeout before raising the retry count.

Some background may help here. You can infer the retry rate from these two counters.

A warning does not stop the run, but it usually points at a real problem. The tool prints the resolved paths before it changes anything. The panel hides every day noise behind a filter.

